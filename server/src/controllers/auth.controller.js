import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { getDbStatus } from '../config/db.js';

/**
 * Known demo credentials supported for instant citizen login
 */
export const DEMO_ACCOUNTS = [
  {
    email: 'citizen.aarav@nyayasetu.gov.in',
    password: 'DemoPassword@2026',
    name: 'Aarav Sharma (Demo Citizen)',
    phone: '9876543210',
    state: 'Delhi',
    language: 'en',
    preferredLanguage: 'hi',
    role: 'user',
  },
  {
    email: 'citizen@nyayasetu.gov.in',
    password: 'password123',
    name: 'Anush S (Demo Citizen)',
    phone: '9876543210',
    state: 'Karnataka',
    language: 'en',
    preferredLanguage: 'hi',
    role: 'user',
  },
];

/**
 * In-memory fallback user repository for offline/no-db operation
 */
const mockUsers = new Map();

// Initialize mockUsers with both demo accounts
DEMO_ACCOUNTS.forEach((demo) => {
  mockUsers.set(demo.email, {
    _id: 'mock_' + demo.email.replace(/[^a-zA-Z0-9]/g, '_'),
    name: demo.name,
    email: demo.email,
    passwordHash: bcrypt.hashSync(demo.password, 10),
    phone: demo.phone,
    state: demo.state,
    language: demo.language,
    preferredLanguage: demo.preferredLanguage,
    role: demo.role,
    savedSchemes: ['pm-kisan', 'ayushman-bharat'],
  });
});

/**
 * Helper to ensure demo users exist in MongoDB
 */
export const seedDemoUsersIfEmpty = async () => {
  if (!getDbStatus()) return;
  try {
    for (const demo of DEMO_ACCOUNTS) {
      const exists = await User.findOne({ email: demo.email });
      if (!exists) {
        await User.create(demo);
        console.log(`[Seed] Seeded demo user: ${demo.email}`);
      }
    }
  } catch (err) {
    console.warn('[Seed] Demo users seed note:', err.message);
  }
};

/**
 * Generate JWT Token helper
 */
const generateToken = (user) => {
  const secret = process.env.JWT_SECRET || 'nyayasetu_development_jwt_secret_token_12345';
  return jwt.sign(
    {
      id: user._id || user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
    secret,
    { expiresIn: '7d' }
  );
};

/**
 * @desc    Register a new citizen user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, state, language, preferredLanguage } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    // 1. Real MongoDB connected
    if (getDbStatus()) {
      const existingUser = await User.findOne({ email: cleanEmail });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'A user with this email address is already registered. Please log in.',
        });
      }

      const user = await User.create({
        name: name.trim(),
        email: cleanEmail,
        password,
        phone: phone ? phone.trim() : '',
        state: state ? state.trim() : '',
        language: language || 'en',
        preferredLanguage: preferredLanguage || 'hi',
      });

      const token = generateToken(user);
      return res.status(201).json({
        success: true,
        message: 'Citizen account created successfully.',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          state: user.state,
          language: user.language,
          preferredLanguage: user.preferredLanguage,
          role: user.role,
          savedSchemes: user.savedSchemes,
        },
      });
    }

    // 2. In-Memory Fallback
    if (mockUsers.has(cleanEmail)) {
      return res.status(409).json({
        success: false,
        message: 'A user with this email address is already registered. Please log in.',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = {
      _id: 'mock_' + Date.now(),
      name: name.trim(),
      email: cleanEmail,
      passwordHash,
      phone: phone ? phone.trim() : '',
      state: state ? state.trim() : '',
      language: language || 'en',
      preferredLanguage: preferredLanguage || 'hi',
      role: 'user',
      savedSchemes: [],
    };

    mockUsers.set(cleanEmail, newUser);
    const token = generateToken(newUser);

    return res.status(201).json({
      success: true,
      message: 'Citizen account created successfully (Session Active).',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        state: newUser.state,
        language: newUser.language,
        preferredLanguage: newUser.preferredLanguage,
        role: newUser.role,
        savedSchemes: newUser.savedSchemes,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Authenticate user and get JWT
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password.',
      });
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. Real MongoDB connected
    if (getDbStatus()) {
      let user = await User.findOne({ email: cleanEmail });

      // Auto-provision demo account if not already in DB
      if (!user) {
        const demoMatch = DEMO_ACCOUNTS.find((d) => d.email.toLowerCase() === cleanEmail);
        if (demoMatch) {
          user = await User.create(demoMatch);
          console.log(`[Auth] Auto-provisioned demo citizen account: ${cleanEmail}`);
        }
      }

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password credentials.',
        });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password credentials.',
        });
      }

      const token = generateToken(user);
      return res.status(200).json({
        success: true,
        message: 'Logged in successfully.',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          state: user.state,
          language: user.language,
          preferredLanguage: user.preferredLanguage,
          role: user.role,
          savedSchemes: user.savedSchemes,
        },
      });
    }

    // 2. In-Memory Fallback
    const mockUser = mockUsers.get(cleanEmail);
    if (!mockUser) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    const isMatch = await bcrypt.compare(password, mockUser.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
    }

    const token = generateToken(mockUser);
    return res.status(200).json({
      success: true,
      message: 'Logged in successfully.',
      token,
      user: {
        id: mockUser._id,
        name: mockUser.name,
        email: mockUser.email,
        phone: mockUser.phone,
        state: mockUser.state,
        language: mockUser.language,
        preferredLanguage: mockUser.preferredLanguage,
        role: mockUser.role,
        savedSchemes: mockUser.savedSchemes,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get current logged in user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized. User context missing.',
      });
    }

    if (getDbStatus()) {
      const user = await User.findById(userId).select('-password').populate('savedSchemes');
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User profile not found.',
        });
      }
      return res.status(200).json({ success: true, user });
    }

    // In-memory fallback
    for (const u of mockUsers.values()) {
      if (u._id === userId) {
        const { passwordHash, ...clean } = u;
        return res.status(200).json({ success: true, user: clean });
      }
    }

    return res.status(200).json({
      success: true,
      user: {
        _id: userId,
        name: req.user.name || 'Citizen User',
        email: req.user.email || 'citizen@nyayasetu.gov.in',
        role: 'user',
        savedSchemes: [],
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update current user profile
 * @route   PUT /api/auth/profile
 * @access  Private
 */
export const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { name, phone, state, language, preferredLanguage } = req.body;

    if (getDbStatus()) {
      const updates = {};
      if (name) updates.name = name.trim();
      if (phone !== undefined) updates.phone = phone.trim();
      if (state !== undefined) updates.state = state.trim();
      if (language) updates.language = language;
      if (preferredLanguage) updates.preferredLanguage = preferredLanguage;

      const updatedUser = await User.findByIdAndUpdate(userId, updates, {
        new: true,
        runValidators: true,
      }).select('-password');

      return res.status(200).json({
        success: true,
        message: 'Profile updated successfully.',
        user: updatedUser,
      });
    }

    // In-Memory
    for (const u of mockUsers.values()) {
      if (u._id === userId) {
        if (name) u.name = name.trim();
        if (phone !== undefined) u.phone = phone.trim();
        if (state !== undefined) u.state = state.trim();
        if (language) u.language = language;
        if (preferredLanguage) u.preferredLanguage = preferredLanguage;
        const { passwordHash, ...clean } = u;
        return res.status(200).json({
          success: true,
          message: 'Profile updated successfully.',
          user: clean,
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully.',
      user: { name, phone, state, language, preferredLanguage },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Save or bookmark a government scheme for the user
 * @route   POST /api/auth/schemes/:schemeId/save
 * @access  Private
 */
export const toggleSaveScheme = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { schemeId } = req.params;

    if (getDbStatus()) {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      const schemeIndex = user.savedSchemes.findIndex((id) => id.toString() === schemeId);
      let isSaved = false;

      if (schemeIndex > -1) {
        user.savedSchemes.splice(schemeIndex, 1);
        isSaved = false;
      } else {
        user.savedSchemes.push(schemeId);
        isSaved = true;
      }

      await user.save();

      return res.status(200).json({
        success: true,
        isSaved,
        message: isSaved ? 'Scheme saved to your bookmarks.' : 'Scheme removed from bookmarks.',
        savedSchemes: user.savedSchemes,
      });
    }

    // In-Memory
    return res.status(200).json({
      success: true,
      isSaved: true,
      message: 'Scheme saved to your bookmarks.',
      savedSchemes: [schemeId],
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  getMe,
  updateProfile,
  toggleSaveScheme,
  seedDemoUsersIfEmpty,
};
