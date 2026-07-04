export function successResponse(response, { statusCode = 200, message, data = null }) {
  return response.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(response, { statusCode = 500, message, errors = null }) {
  return response.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}

