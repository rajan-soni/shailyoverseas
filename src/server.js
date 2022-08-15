import app from './app.js';
import { NODE_ENV, NODE_PORT } from './config/index.js';

app.listen(NODE_PORT, () => {
  console.log(`${NODE_ENV} server started on port ${NODE_PORT}.......`);
});
