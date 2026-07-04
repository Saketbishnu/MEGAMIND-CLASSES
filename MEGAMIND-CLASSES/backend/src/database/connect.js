import mongoose from 'mongoose';
import { env } from '../config/env.js';

export async function connectDatabase() {
  if (!env.MONGODB_URI) {
    console.warn('MONGODB_URI is not configured. Database connection skipped.');
    return null;
  }

  mongoose.set('strictQuery', true);

  const connection = await mongoose.connect(env.MONGODB_URI, {
    dbName: 'megamind-classes',
  });

  console.log(`MongoDB connected: ${connection.connection.host}`);
  return connection;
}

