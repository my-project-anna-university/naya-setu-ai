import LegalAidCenter from '../models/LegalAidCenter.js';
import { legalAidCentersData, calculateDistanceKm } from '../data/legalAidCenters.js';
import { getDbStatus } from '../config/db.js';

/**
 * Auto-seed legal aid centers into MongoDB if collection is empty
 */
export const seedLegalAidCentersIfEmpty = async () => {
  if (!getDbStatus()) return;
  try {
    const count = await LegalAidCenter.countDocuments();
    if (count === 0) {
      console.log(`[Seed] Seeding ${legalAidCentersData.length} Legal Aid Centers into MongoDB...`);
      await LegalAidCenter.insertMany(legalAidCentersData);
      console.log('[Seed] Legal Aid Centers seeded successfully.');
    }
  } catch (error) {
    console.warn('[Seed] Legal Aid Centers seeding skipped/failed:', error.message);
  }
};

/**
 * @desc    Get all legal aid centers with optional state, city, and type filters
 * @route   GET /api/legalaid/centers
 * @access  Public
 */
export const getAllCenters = async (req, res, next) => {
  try {
    const { state, city, type, search, page = 1, limit = 50 } = req.query;

    if (getDbStatus()) {
      const filter = {};
      if (state) filter.state = new RegExp(state, 'i');
      if (city) filter.city = new RegExp(city, 'i');
      if (type) filter.type = type.toUpperCase();
      if (search) {
        filter.$or = [
          { name: new RegExp(search, 'i') },
          { address: new RegExp(search, 'i') },
          { city: new RegExp(search, 'i') },
          { state: new RegExp(search, 'i') },
          { services: new RegExp(search, 'i') },
        ];
      }

      const skip = (Number(page) - 1) * Number(limit);
      const total = await LegalAidCenter.countDocuments(filter);
      const centers = await LegalAidCenter.find(filter)
        .sort({ state: 1, city: 1 })
        .skip(skip)
        .limit(Number(limit));

      return res.status(200).json({
        success: true,
        count: centers.length,
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        centers,
      });
    }

    // In-Memory Fallback
    let filtered = [...legalAidCentersData];
    if (state) {
      filtered = filtered.filter((c) => c.state.toLowerCase() === state.toLowerCase());
    }
    if (city) {
      filtered = filtered.filter((c) => c.city.toLowerCase() === city.toLowerCase());
    }
    if (type) {
      filtered = filtered.filter((c) => c.type.toLowerCase() === type.toLowerCase());
    }
    if (search) {
      const term = search.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.address.toLowerCase().includes(term) ||
          c.city.toLowerCase().includes(term) ||
          c.state.toLowerCase().includes(term) ||
          c.services.some((s) => s.toLowerCase().includes(term))
      );
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      total: filtered.length,
      page: 1,
      totalPages: 1,
      centers: filtered,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get legal aid centers by state
 * @route   GET /api/legalaid/centers/:state
 * @access  Public
 */
export const getCentersByState = async (req, res, next) => {
  try {
    const { state } = req.params;

    if (getDbStatus()) {
      const centers = await LegalAidCenter.find({
        state: new RegExp(`^${state}$`, 'i'),
      }).sort({ city: 1 });

      return res.status(200).json({
        success: true,
        state,
        count: centers.length,
        centers,
      });
    }

    // In-memory fallback
    const filtered = legalAidCentersData.filter(
      (c) => c.state.toLowerCase() === state.toLowerCase()
    );

    return res.status(200).json({
      success: true,
      state,
      count: filtered.length,
      centers: filtered,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Find nearby legal aid centers using coordinates (lat/lng) or city
 * @route   GET /api/legalaid/centers/nearby
 * @access  Public
 */
export const getNearbyCenters = async (req, res, next) => {
  try {
    const { lat, lng, radiusKm = 50, city, state } = req.query;

    let allCenters = legalAidCentersData;
    if (getDbStatus()) {
      const dbCenters = await LegalAidCenter.find({});
      if (dbCenters && dbCenters.length > 0) {
        allCenters = dbCenters.map((c) => (c.toObject ? c.toObject() : c));
      }
    }

    // If coordinates are provided, compute geometric distance
    if (lat && lng && !isNaN(Number(lat)) && !isNaN(Number(lng))) {
      const userLat = Number(lat);
      const userLng = Number(lng);
      const maxDistance = Number(radiusKm);

      const withDistances = allCenters
        .map((center) => {
          if (!center.coordinates || !center.coordinates.lat || !center.coordinates.lng) {
            return { ...center, distanceKm: null };
          }
          const distance = calculateDistanceKm(
            userLat,
            userLng,
            center.coordinates.lat,
            center.coordinates.lng
          );
          return {
            ...center,
            distanceKm: distance,
          };
        })
        .filter((c) => c.distanceKm !== null && c.distanceKm <= maxDistance)
        .sort((a, b) => a.distanceKm - b.distanceKm);

      return res.status(200).json({
        success: true,
        userCoordinates: { lat: userLat, lng: userLng },
        radiusKm: maxDistance,
        count: withDistances.length,
        centers: withDistances,
      });
    }

    // Fallback: filter by city or state
    let matched = allCenters;
    if (city) {
      matched = matched.filter((c) => c.city.toLowerCase().includes(city.toLowerCase()));
    } else if (state) {
      matched = matched.filter((c) => c.state.toLowerCase().includes(state.toLowerCase()));
    }

    return res.status(200).json({
      success: true,
      filter: { city, state },
      count: matched.length,
      centers: matched,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single legal aid center by ID
 * @route   GET /api/legalaid/center/:id
 * @access  Public
 */
export const getCenterById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDbStatus()) {
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const center = await LegalAidCenter.findById(id);
        if (center) {
          return res.status(200).json({ success: true, center });
        }
      }
    }

    const center = legalAidCentersData.find(
      (c) => c.name.toLowerCase().includes(id.toLowerCase()) || c.city.toLowerCase() === id.toLowerCase()
    );

    if (!center) {
      return res.status(404).json({
        success: false,
        message: 'Legal aid center not found.',
      });
    }

    return res.status(200).json({
      success: true,
      center,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCenters,
  getCentersByState,
  getNearbyCenters,
  getCenterById,
  seedLegalAidCentersIfEmpty,
};
