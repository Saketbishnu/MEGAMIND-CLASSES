import dotenv from 'dotenv';

dotenv.config();

const toNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: toNumber(process.env.PORT, 5000),
  API_VERSION: process.env.API_VERSION || 'v1',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
  ADMIN_URL: process.env.ADMIN_URL || 'http://localhost:5174',
  MONGODB_URI: process.env.MONGODB_URI || '',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || '',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '',
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
  RATE_LIMIT_WINDOW_MS: toNumber(process.env.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000),
  RATE_LIMIT_MAX: toNumber(process.env.RATE_LIMIT_MAX, 100),
};

