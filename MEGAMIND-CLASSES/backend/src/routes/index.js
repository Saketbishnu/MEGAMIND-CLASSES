import { Router } from 'express';
import { admissionsRouter } from './admissions.routes.js';
import { authRouter } from './auth.routes.js';
import { contactRouter } from './contact.routes.js';
import { coursesRouter } from './courses.routes.js';
import { dashboardRouter } from './dashboard.routes.js';
import { galleryRouter } from './gallery.routes.js';
import { paymentsRouter } from './payments.routes.js';
import { resultsRouter } from './results.routes.js';
import { studentsRouter } from './students.routes.js';

export const apiV1Router = Router();

apiV1Router.get('/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    scope: 'api-v1',
  });
});

apiV1Router.use('/auth', authRouter);
apiV1Router.use('/students', studentsRouter);
apiV1Router.use('/courses', coursesRouter);
apiV1Router.use('/gallery', galleryRouter);
apiV1Router.use('/results', resultsRouter);
apiV1Router.use('/admissions', admissionsRouter);
apiV1Router.use('/contact', contactRouter);
apiV1Router.use('/dashboard', dashboardRouter);
apiV1Router.use('/payments', paymentsRouter);

