import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.send('About Us');
});

export default router;
