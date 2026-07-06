import { ContactMessage } from '../models/ContactMessage.js';
import { ApiError } from '../utils/ApiError.js';

export async function createContactMessage({ name, email, phone, subject, message }) {
  try {
    const contactMessage = await ContactMessage.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return contactMessage;
  } catch (error) {
    if (error.name === 'ValidationError') {
      const details = Object.values(error.errors).map((err) => ({
        field: err.path,
        message: err.message,
      }));
      const apiError = new ApiError(400, 'Validation failed');
      apiError.details = details;
      throw apiError;
    }

    throw error;
  }
}
