// /api/index.js            <-- the only file Vercel needs
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import authRoutes     from '../routes/authRoutes.js';
import designRoutes   from '../routes/designRoutes.js';
import orderRoutes    from '../routes/orderRoutes.js';
import supportRoutes  from '../routes/supportRoutes.js';
import favoriteRoutes from '../routes/favoriteRoutes.js';

dotenv.config();

/* ------------------- 1. CREATE APP ------------------- */
const app = express();

/* ------------------- 2. GLOBAL MIDDLEWARE ------------ */
app.use(
  cors({
    origin: process.env.FRONTEND_URL?.split(','), // supports multiple origins if you ever need them
    credentials: true
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

/* ------------------- 3. CONNECT TO DB --------------- */
// Connect once per cold start.  Subsequent invocations reuse the connection
if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected (cold start)'))
    .catch(err => console.error('❌ Mongo connection error:', err));
}

/* ------------------- 4. HEALTH CHECK ---------------- */
app.get('/api/health', (_, res) => res.send('OK'));

/* ------------------- 5. ROUTES ---------------------- */
app.use('/api/auth',      authRoutes);
app.use('/api/designs',   designRoutes);
app.use('/api/orders',    orderRoutes);
app.use('/api/support',   supportRoutes);
app.use('/api/favorites', favoriteRoutes);

/* ------------------- 6. NO app.listen() ------------- */
export default app;   // <-- This is what Vercel turns into a serverless function
