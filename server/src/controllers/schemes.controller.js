import GovernmentScheme from '../models/GovernmentScheme.js';
import { governmentSchemesData, calculateSchemeMatch } from '../data/governmentSchemes.js';
import { getDbStatus } from '../config/db.js';

/**
 * Helper to ensure seed data is available if MongoDB is connected
 */
export const seedSchemesIfEmpty = async () => {
  if (!getDbStatus()) return;
  try {
    const count = await GovernmentScheme.countDocuments();
    if (count === 0) {
      console.log(`[Seed] Seeding ${governmentSchemesData.length} Government Schemes into MongoDB...`);
      await GovernmentScheme.insertMany(governmentSchemesData);
      console.log('[Seed] Schemes seeded successfully.');
    }
  } catch (error) {
    console.warn('[Seed] Schemes seeding skipped/failed:', error.message);
  }
};

/**
 * @desc    Get all government schemes with filtering and search
 * @route   GET /api/schemes
 * @access  Public
 */
export const getAllSchemes = async (req, res, next) => {
  try {
    const { category, state, search, status = 'active', limit = 50, page = 1 } = req.query;

    if (getDbStatus()) {
      const filter = {};
      if (status) filter.status = status;
      if (category) filter.category = new RegExp(category, 'i');
      if (state && state !== 'All India') {
        filter['eligibility.state'] = { $in: ['All India', new RegExp(state, 'i')] };
      }
      if (search) {
        filter.$or = [
          { name: new RegExp(search, 'i') },
          { description: new RegExp(search, 'i') },
          { ministry: new RegExp(search, 'i') },
          { category: new RegExp(search, 'i') },
          { tags: new RegExp(search, 'i') },
        ];
      }

      const skip = (Number(page) - 1) * Number(limit);
      const total = await GovernmentScheme.countDocuments(filter);
      const schemes = await GovernmentScheme.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit));

      return res.status(200).json({
        success: true,
        count: schemes.length,
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        schemes,
      });
    }

    // In-Memory Fallback
    let filtered = [...governmentSchemesData];
    if (category) {
      filtered = filtered.filter((s) => s.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (state && state !== 'All India') {
      filtered = filtered.filter((s) =>
        s.eligibility.state.includes('All India') ||
        s.eligibility.state.some((st) => st.toLowerCase() === state.toLowerCase())
      );
    }
    if (search) {
      const term = search.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.description.toLowerCase().includes(term) ||
          s.ministry.toLowerCase().includes(term) ||
          (s.tags && s.tags.some((t) => t.toLowerCase().includes(term)))
      );
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      total: filtered.length,
      page: 1,
      totalPages: 1,
      schemes: filtered,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Search government schemes
 * @route   GET /api/schemes/search
 * @access  Public
 */
export const searchSchemes = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q || q.trim() === '') {
      return res.status(400).json({ success: false, message: 'Please provide a search term (q).' });
    }

    const term = q.toLowerCase();

    if (getDbStatus()) {
      const schemes = await GovernmentScheme.find({
        $or: [
          { name: new RegExp(term, 'i') },
          { description: new RegExp(term, 'i') },
          { ministry: new RegExp(term, 'i') },
          { category: new RegExp(term, 'i') },
          { tags: new RegExp(term, 'i') },
        ],
      }).limit(20);

      return res.status(200).json({
        success: true,
        count: schemes.length,
        schemes,
      });
    }

    // In-memory search
    const results = governmentSchemesData.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        s.ministry.toLowerCase().includes(term) ||
        (s.tags && s.tags.some((t) => t.toLowerCase().includes(term)))
    );

    return res.status(200).json({
      success: true,
      count: results.length,
      schemes: results,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single scheme by ID or slug
 * @route   GET /api/schemes/:id
 * @access  Public
 */
export const getSchemeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      let scheme = null;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        scheme = await GovernmentScheme.findById(id);
      }
      if (!scheme) {
        scheme = await GovernmentScheme.findOne({ slug: id.toLowerCase() });
      }
      if (!scheme) {
        scheme = await GovernmentScheme.findOne({ name: new RegExp(id, 'i') });
      }

      if (scheme) {
        return res.status(200).json({ success: true, scheme });
      }
    }

    // Fallback search in static array
    const scheme = governmentSchemesData.find(
      (s) =>
        s.name.toLowerCase() === id.toLowerCase() ||
        s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(id.toLowerCase())
    );

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: 'Government scheme not found.',
      });
    }

    return res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Check citizen eligibility across all government schemes
 * @route   POST /api/schemes/check-eligibility
 * @access  Public
 */
export const checkEligibility = async (req, res, next) => {
  try {
    const { age, income, category, state, gender, occupation } = req.body;

    const userProfile = {
      age: age !== undefined && age !== '' ? Number(age) : null,
      income: income !== undefined && income !== '' ? Number(income) : null,
      category: category || 'General',
      state: state || 'All India',
      gender: gender || 'All',
      occupation: occupation || null,
    };

    let schemesList = governmentSchemesData;

    if (getDbStatus()) {
      try {
        const dbSchemes = await GovernmentScheme.find({ status: 'active' });
        if (dbSchemes && dbSchemes.length > 0) {
          schemesList = dbSchemes;
        }
      } catch (err) {
        console.warn('[Schemes Check] DB fetch failed, using static data:', err.message);
      }
    }

    // Evaluate each scheme against user profile
    const evaluated = schemesList.map((scheme) => {
      const matchResult = calculateSchemeMatch(scheme, userProfile);
      const schemeObj = scheme.toObject ? scheme.toObject() : scheme;
      return {
        ...schemeObj,
        matchPercentage: matchResult.matchPercentage,
        matchedCriteria: matchResult.matchedCriteria,
        unmetCriteria: matchResult.unmetCriteria,
        isEligible: matchResult.isEligible,
      };
    });

    // Sort by match percentage descending
    evaluated.sort((a, b) => b.matchPercentage - a.matchPercentage);

    const highMatch = evaluated.filter((s) => s.matchPercentage >= 75);
    const moderateMatch = evaluated.filter((s) => s.matchPercentage >= 50 && s.matchPercentage < 75);

    return res.status(200).json({
      success: true,
      profile: userProfile,
      totalEvaluated: evaluated.length,
      eligibleCount: highMatch.length + moderateMatch.length,
      highMatchCount: highMatch.length,
      results: evaluated,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSchemes,
  getSchemeById,
  searchSchemes,
  checkEligibility,
  seedSchemesIfEmpty,
};
