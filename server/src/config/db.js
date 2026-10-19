import mongoose from 'mongoose';

/**
 * MongoDB Connection Manager with Automatic Embedded Server Fallback
 */
let isConnected = false;
let memoryServerInstance = null;

export const connectDB = async () => {
  const customUri = process.env.MONGODB_URI;

  // 1. If explicit MONGODB_URI is provided in .env, connect to it
  if (customUri) {
    try {
      const sanitized = customUri.replace(/:([^:@]+)@/, ':****@');
      console.log(`[Database] Connecting to configured MongoDB: ${sanitized}...`);
      const conn = await mongoose.connect(customUri, {
        serverSelectionTimeoutMS: 5000,
        autoIndex: true,
      });
      isConnected = true;
      console.log(`[Database] Connected successfully to external MongoDB: ${conn.connection.host}`);
      return conn;
    } catch (err) {
      console.warn(`[Database] External MongoDB connection failed: ${err.message}`);
      console.log('[Database] Falling back to local embedded database...');
    }
  } else {
    // 2. Try default localhost:27017 with a quick check (2s timeout)
    try {
      console.log('[Database] Checking local MongoDB service (mongodb://127.0.0.1:27017/nyayasetu)...');
      const conn = await mongoose.connect('mongodb://127.0.0.1:27017/nyayasetu', {
        serverSelectionTimeoutMS: 2000,
        autoIndex: true,
      });
      isConnected = true;
      console.log(`[Database] Connected to local MongoDB service: ${conn.connection.host}`);
      return conn;
    } catch (localErr) {
      console.log('[Database] No local MongoDB daemon active on port 27017.');
    }
  }

  // 3. Automatically initialize Embedded In-Memory MongoDB (Zero-Config Development Mode)
  try {
    console.log('[Database] Starting Embedded MongoDB Server (Zero-Config Mode)...');
    const { MongoMemoryServer } = await import('mongodb-memory-server');
    memoryServerInstance = await MongoMemoryServer.create();
    const memoryUri = memoryServerInstance.getUri();

    const conn = await mongoose.connect(memoryUri, {
      autoIndex: true,
    });

    isConnected = true;
    console.log('======================================================');
    console.log('  [Database] EMBEDDED MONGODB ENGINE ACTIVE');
    console.log(`  [Database] URI: ${memoryUri}`);
    console.log('  [Database] Full Mongoose Models, Auth & Queries Active!');
    console.log('======================================================');
    return conn;
  } catch (memErr) {
    console.warn(`[Database] Note on embedded engine startup: ${memErr.message}`);
    console.log('[Database] Operating with built-in in-memory dataset fallback.');
  }
};

mongoose.connection.on('connected', () => {
  isConnected = true;
  console.log('[Database Event] Mongoose connected successfully.');
});

mongoose.connection.on('error', (err) => {
  if (isConnected) {
    console.error('[Database Event] Mongoose error:', err.message);
  }
});

mongoose.connection.on('disconnected', () => {
  if (isConnected) {
    isConnected = false;
    console.warn('[Database Event] Mongoose disconnected.');
  }
});

export const getDbStatus = () => isConnected && mongoose.connection.readyState === 1;

export const disconnectDB = async () => {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
  }
  if (memoryServerInstance) {
    await memoryServerInstance.stop();
    memoryServerInstance = null;
  }
};

export default connectDB;
