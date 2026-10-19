import express from 'express';
import {
  getAllCenters,
  getCentersByState,
  getNearbyCenters,
  getCenterById,
} from '../controllers/legalaid.controller.js';

const router = express.Router();

router.get('/centers', getAllCenters);
router.get('/centers/nearby', getNearbyCenters);
router.get('/centers/:state', getCentersByState);
router.get('/center/:id', getCenterById);

export default router;
