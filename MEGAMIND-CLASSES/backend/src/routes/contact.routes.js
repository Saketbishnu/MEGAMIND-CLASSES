import { Router } from 'express';
import { createContactController } from '../controllers/contact.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validateRequest } from '../middlewares/validateRequest.middleware.js';
import { createContactValidation } from '../validations/contact.validation.js';

export const contactRouter = Router();

contactRouter.post('/', createContactValidation, validateRequest, asyncHandler(createContactController));
