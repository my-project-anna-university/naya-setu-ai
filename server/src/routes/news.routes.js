import express from 'express';
import { getLegalNews } from '../controllers/news.controller.js';

const router = express.Router();

router.get('/updates', getLegalNews);

export default router;
