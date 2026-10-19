import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Middleware to verify JWT token and attach user to request.
 */
export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No authentication token provided.',
      });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'nyayasetu_development_jwt_secret_token_12345';

    const decoded = jwt.verify(token, secret);
    
    // Attempt fetching user from DB if possible
    try {
      const user = await User.findById(decoded.id).select('-password');
      if (user) {
        req.user = user;
      } else {
        req.user = decoded; // Fallback to decoded payload
      }
    } catch {
      req.user = decoded;
    }

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token has expired. Please log in again.',
        code: 'TOKEN_EXPIRED',
      });
    }
    return res.status(403).json({
      success: false,
      message: 'Invalid or forged authentication token.',
      code: 'INVALID_TOKEN',
    });
  }
};

/**
 * Optional authentication middleware: attaches user if token is present, continues anyway if not.
 */
export const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      req.user = null;
      return next();
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'nyayasetu_development_jwt_secret_token_12345';
    const decoded = jwt.verify(token, secret);

    try {
      const user = await User.findById(decoded.id).select('-password');
      req.user = user || decoded;
    } catch {
      req.user = decoded;
    }

    next();
  } catch {
    req.user = null;
    next();
  }
};

/**
 * Middleware to require admin privileges.
 */
export const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Forbidden. Admin privileges required for this action.',
    });
  }
  next();
};

export default {
  authenticateToken,
  optionalAuth,
  requireAdmin,
};
