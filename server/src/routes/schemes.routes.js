import express from 'express';
import {
  getAllSchemes,
  getSchemeById,
  searchSchemes,
  checkEligibility,
} from '../controllers/schemes.controller.js';

const router = express.Router();

router.get('/', getAllSchemes);
router.get('/search', searchSchemes);
router.post('/check-eligibility', checkEligibility);
router.get('/:id', getSchemeById);

export default router;
