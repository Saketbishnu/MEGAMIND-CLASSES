import { validationResult } from 'express-validator';
import { ApiError } from '../utils/ApiError.js';

export function validateRequest(request, _response, next) {
  const result = validationResult(request);

  if (!result.isEmpty()) {
    const error = new ApiError(400, 'Validation failed');
    error.details = result.array().map(({ path, msg }) => ({ field: path, message: msg }));
    return next(error);
  }

  next();
}
