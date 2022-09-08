import app from './app.js';
import { NODE_ENV,  } from './config/index.js';
import logger from './utils/logger.js';

app.listen(process.env.PORT || 5000, () => {
  logger.info(`${NODE_ENV} server started on port ${process.env.PORT}.......`);
});
