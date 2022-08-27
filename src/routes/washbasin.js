import { Router } from 'express';
import { wallHungData } from '../site-data/wall-hung.js';
import { washbasinData } from '../site-data/wash-basin.js';
import { tableTopBasinData } from '../site-data/table-top-basin.js';
import { basinPedestalData } from '../site-data/basin-pedestal.js';
import { woodenData } from '../site-data/wooden.js';
import { rusticData } from '../site-data/rustic.js';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/wash-basin-category', {
    title: 'Wash Basin Category',
  });
});

router.get('/basin', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Wash Basin',
    products: washbasinData,
  });
});

router.get('/table-top-basin', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Table Top Basin',
    products: tableTopBasinData,
  });
});

router.get('/wash-basin-pedestal', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Wash Basin With Pedestals',
    products: basinPedestalData,
  });
});

router.get('/designer-series', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series',
    products: wallHungData,
  });
});

router.get('/wooden-series', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Wooden Series',
    products: woodenData,
  });
});

router.get('/rustic-series', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Rustic Series',
    products: rusticData,
  });
});

export default router;
