import { ApiError } from '../utils/ApiError.js';
import { successResponse } from '../utils/apiResponse.js';
import { registerInitialAdmin, loginAdmin } from '../services/adminAuth.service.js';

function setAuthCookie(response, token) {
  response.cookie('adminAccessToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000,
  });
}

export async function registerAdminController(request, response) {
  const result = await registerInitialAdmin(request.body);
  setAuthCookie(response, result.accessToken);
  return successResponse(response, {
    statusCode: 201,
    message: 'Admin registered successfully',
    data: {
      admin: result.admin,
      accessToken: result.accessToken,
    },
  });
}

export async function loginAdminController(request, response) {
  const result = await loginAdmin(request.body);
  setAuthCookie(response, result.accessToken);
  return successResponse(response, {
    statusCode: 200,
    message: 'Login successful',
    data: {
      admin: result.admin,
      accessToken: result.accessToken,
    },
  });
}

export async function logoutAdminController(_request, response) {
  response.clearCookie('adminAccessToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  return successResponse(response, {
    statusCode: 200,
    message: 'Logout successful',
  });
}

export async function currentAdminController(request, response) {
  if (!request.admin) {
    throw new ApiError(401, 'Unauthorized');
  }

  return successResponse(response, {
    statusCode: 200,
    message: 'Current admin fetched successfully',
    data: {
      admin: request.admin,
    },
  });
}

