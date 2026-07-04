import { Router } from 'express';
import {
  currentAdminController,
  loginAdminController,
  logoutAdminController,
  registerAdminController,
} from '../controllers/adminAuth.controller.js';
import { protectAdmin } from '../middlewares/auth.middleware.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validateRequest } from '../middlewares/validateRequest.middleware.js';
import { loginAdminValidation, registerAdminValidation } from '../validations/adminAuth.validation.js';

export const authRouter = Router();

authRouter.post('/register-admin', registerAdminValidation, validateRequest, asyncHandler(registerAdminController));
authRouter.post('/login', loginAdminValidation, validateRequest, asyncHandler(loginAdminController));
authRouter.post('/logout', asyncHandler(logoutAdminController));
authRouter.get('/me', protectAdmin, asyncHandler(currentAdminController));
