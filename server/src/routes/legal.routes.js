import express from 'express';
import { body } from 'express-validator';
import {
  askQuestion,
  getRightsByCategory,
  getCategories,
  rateFeedback,
} from '../controllers/legal.controller.js';
import { optionalAuth } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

const queryValidation = [
  body().custom((value, { req }) => {
    const q = req.body?.question || req.body?.query || req.body?.text || req.body?.message;
    if (!q || typeof q !== 'string' || q.trim().length < 3) {
      throw new Error('Please provide a legal question or query (minimum 3 characters).');
    }
    req.body.question = q.trim();
    return true;
  }),
];

router.post('/query', optionalAuth, validate(queryValidation), askQuestion);
router.get('/categories', getCategories);
router.get('/rights/:category', getRightsByCategory);
router.post('/query/:id/feedback', rateFeedback);

export default router;
