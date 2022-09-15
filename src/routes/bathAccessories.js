import { Router } from 'express';
import { bathAccessoriesData } from '../site-data/bathAccessories.js';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Bathroom Accessories',
    products: bathAccessoriesData,
  });
});

export default router;
