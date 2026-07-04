export function errorHandler(error, _request, response, _next) {
  const statusCode = error.statusCode || error.status || 500;

  response.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Internal server error' : error.message,
    errors: error.details || null,
  });
}
