import { logger } from '../utils/logger.js';

export const errorMiddleware = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
  res.status(status).json({
    status: error.status,
    message: error.message,
  });
};
