import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

// Database & Seeding
import { connectDB, getDbStatus, disconnectDB } from './config/db.js';
import { seedSchemesIfEmpty } from './controllers/schemes.controller.js';
import { seedLegalAidCentersIfEmpty } from './controllers/legalaid.controller.js';
import { seedDemoUsersIfEmpty } from './controllers/auth.controller.js';

// Route Handlers
import authRoutes from './routes/auth.routes.js';
import legalRoutes from './routes/legal.routes.js';
import schemesRoutes from './routes/schemes.routes.js';
import documentsRoutes from './routes/documents.routes.js';
import legalAidRoutes from './routes/legalaid.routes.js';
import newsRoutes from './routes/news.routes.js';

// Middlewares
import { notFound, errorHandler } from './middleware/error.middleware.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security HTTP headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// Cross-Origin Resource Sharing (CORS)
const allowedOrigins = process.env.CLIENT_URL
  ? [process.env.CLIENT_URL, 'http://localhost:3000', 'http://localhost:5173']
  : '*';

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// HTTP request logger
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Global Rate Limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});
app.use('/api', globalLimiter);

// Specific Rate Limiter for AI / Legal Query Generation
const queryLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // 50 queries per 5 minutes
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Legal query rate limit exceeded. Please wait a few minutes before submitting new questions.',
  },
});
app.use('/api/legal/query', queryLimiter);

// Root Index Route
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'NyayaSetu API',
    tagline: 'Connecting Indian Citizens with Legal Rights & Government Services',
    version: '1.0.0',
    status: 'operational',
    documentation: {
      auth: '/api/auth (POST /register, POST /login, GET /me, PUT /profile)',
      legal: '/api/legal (POST /query, GET /rights/:category, GET /categories)',
      schemes: '/api/schemes (GET /, GET /search, POST /check-eligibility, GET /:id)',
      documents: '/api/documents (GET /templates, POST /generate, GET /user/:userId)',
      legalAid: '/api/legalaid (GET /centers, GET /centers/nearby, GET /centers/:state)',
      news: '/api/news (GET /updates)',
      health: '/api/health',
    },
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: getDbStatus() ? 'connected' : 'in-memory-fallback',
    environment: process.env.NODE_ENV || 'development',
  });
});

// Mount API Routes
app.use('/api/auth', authRoutes);
app.use('/api/legal', legalRoutes);
app.use('/api/schemes', schemesRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/legalaid', legalAidRoutes);
app.use('/api/news', newsRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

// Connect Database and Start Server
let server;

const startServer = async () => {
  try {
    // Attempt DB connection in background without blocking server launch
    connectDB()
      .then(async () => {
        await seedDemoUsersIfEmpty();
        await seedSchemesIfEmpty();
        await seedLegalAidCentersIfEmpty();
      })
      .catch((err) => {
        console.warn('[Database] Initial connection attempt deferred:', err.message);
      });

    server = app.listen(PORT, () => {
      console.log(`
======================================================
  NYAYASETU BACKEND SERVER STARTED
  ----------------------------------------------------
  Local URL:        http://localhost:${PORT}
  Environment:      ${process.env.NODE_ENV || 'development'}
  Database Status:  ${getDbStatus() ? 'MongoDB Connected' : 'Connecting (In-Memory Active)'}
  AI Engine:        ${process.env.GEMINI_API_KEY ? 'Gemini 1.5 Flash' : 'Offline Legal Knowledge Engine'}
======================================================
      `);
    });
  } catch (error) {
    console.error('Fatal server startup error:', error.message);
    process.exit(1);
  }
};

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('[Unhandled Rejection]', err.message);
});

// Handle termination signals
const gracefulShutdown = async (signal) => {
  console.log(`${signal} signal received. Closing HTTP server and database gracefully.`);
  await disconnectDB();
  if (server) {
    server.close(() => {
      console.log('HTTP server closed.');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

export default app;
