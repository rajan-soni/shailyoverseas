import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.send('Home Page');
});

export default router;
