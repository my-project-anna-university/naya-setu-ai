import express from 'express';
import { body } from 'express-validator';
import {
  getTemplates,
  generateDocument,
  getUserDocuments,
  getDocumentById,
} from '../controllers/documents.controller.js';
import { optionalAuth } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

const generateValidation = [
  body('type')
    .notEmpty()
    .withMessage('Document type is required')
    .isIn(['rti', 'notice', 'complaint', 'affidavit'])
    .withMessage('Type must be one of: rti, notice, complaint, affidavit'),
  body('data').isObject().withMessage('Data object containing form inputs is required'),
];

router.get('/templates', getTemplates);
router.post('/generate', optionalAuth, validate(generateValidation), generateDocument);
router.get('/user/:userId', getUserDocuments);
router.get('/:id', getDocumentById);

export default router;
