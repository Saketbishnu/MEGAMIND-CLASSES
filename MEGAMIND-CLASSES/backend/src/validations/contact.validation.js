import { body } from 'express-validator';

const name = body('name')
  .trim()
  .notEmpty()
  .withMessage('Name is required')
  .isLength({ max: 100 })
  .withMessage('Name cannot exceed 100 characters');

const email = body('email')
  .trim()
  .notEmpty()
  .withMessage('Email is required')
  .isEmail()
  .withMessage('Enter a valid email address')
  .normalizeEmail();

const phone = body('phone')
  .trim()
  .notEmpty()
  .withMessage('Phone is required')
  .matches(/^\+?[0-9\s-]{7,15}$/)
  .withMessage('Enter a valid phone number');

const subject = body('subject')
  .trim()
  .notEmpty()
  .withMessage('Subject is required')
  .isLength({ max: 150 })
  .withMessage('Subject cannot exceed 150 characters');

const message = body('message')
  .trim()
  .notEmpty()
  .withMessage('Message is required')
  .isLength({ max: 4000 })
  .withMessage('Message cannot exceed 4000 characters');

export const createContactValidation = [name, email, phone, subject, message];
