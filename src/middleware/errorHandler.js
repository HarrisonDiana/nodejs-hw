import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      message: error.message || error.name,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';

  console.error(error);
  res.status(500).json({
    message: isProd ? 'Internal server error' : error.message,
  });
};