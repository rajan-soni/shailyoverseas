import app from './app.js';
import { NODE_ENV, NODE_PORT } from './config/index.js';
import logger from './utils/logger.js';

app.listen(NODE_PORT || 5000, () => {
  logger.info(`${NODE_ENV} server started on port ${NODE_PORT}.......`);
});
