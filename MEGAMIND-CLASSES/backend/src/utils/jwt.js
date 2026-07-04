import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export function signAdminToken(payload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_ACCESS_EXPIRES_IN || '1d' });
}

export function verifyAdminToken(token) {
  return jwt.verify(token, env.JWT_SECRET);
}

