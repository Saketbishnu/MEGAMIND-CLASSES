import { successResponse } from '../utils/apiResponse.js';
import { createContactMessage } from '../services/contact.service.js';

export async function createContactController(request, response) {
  const contactMessage = await createContactMessage(request.body);

  return successResponse(response, {
    statusCode: 201,
    message: 'Contact message submitted successfully',
    data: {
      contactMessage,
    },
  });
}
