import { body } from 'express-validator';

const fullName = body('fullName')
  .trim()
  .notEmpty()
  .withMessage('Full name is required')
  .isLength({ min: 2, max: 100 })
  .withMessage('Full name must be between 2 and 100 characters');

const email = body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Enter a valid email');

const password = body('password')
  .notEmpty()
  .withMessage('Password is required')
  .isLength({ min: 8 })
  .withMessage('Password must be at least 8 characters');

const phone = body('phone')
  .trim()
  .notEmpty()
  .withMessage('Phone is required')
  .matches(/^\+?[0-9\s-]{7,15}$/)
  .withMessage('Enter a valid phone number');

export const registerAdminValidation = [fullName, email, password, phone];
export const loginAdminValidation = [email, password];

