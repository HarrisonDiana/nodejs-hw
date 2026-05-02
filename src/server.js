import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(logger);
app.use(cors());
app.use(express.json());

// routes
app.use(notesRoutes);

// test error route
app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

// 404 middleware
app.use(notFoundHandler);

// error middleware
app.use(errorHandler);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});