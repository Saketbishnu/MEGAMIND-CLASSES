import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { apiV1Router } from './routes/index.js';

export const app = express();

const corsOrigins = [env.CLIENT_URL, env.ADMIN_URL].filter(Boolean);

app.set('trust proxy', 1);

app.use(helmet());
app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  }),
);
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(
  rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    limit: env.RATE_LIMIT_MAX,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
  }),
);

app.get('/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    service: 'megamind-classes-api',
    version: env.API_VERSION,
  });
});

app.use(`/api/${env.API_VERSION}`, apiV1Router);

app.use(notFoundHandler);
app.use(errorHandler);

