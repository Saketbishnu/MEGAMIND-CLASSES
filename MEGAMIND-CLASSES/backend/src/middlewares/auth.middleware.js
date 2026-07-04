import { Admin } from '../models/Admin.js';
import { ApiError } from '../utils/ApiError.js';
import { verifyAdminToken } from '../utils/jwt.js';

function extractToken(request) {
  const authHeader = request.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  return request.cookies?.adminAccessToken || null;
}

export async function protectAdmin(request, _response, next) {
  try {
    const token = extractToken(request);

    if (!token) {
      throw new ApiError(401, 'Unauthorized');
    }

    const decoded = verifyAdminToken(token);
    const admin = await Admin.findById(decoded.adminId).select('-password');

    if (!admin || !admin.isActive) {
      throw new ApiError(403, 'Forbidden');
    }

    request.admin = admin;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      next(new ApiError(401, 'Token expired'));
      return;
    }

    if (error.name === 'JsonWebTokenError') {
      next(new ApiError(401, 'Invalid token'));
      return;
    }

    next(error.statusCode ? error : new ApiError(401, 'Unauthorized'));
  }
}

