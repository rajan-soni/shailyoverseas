import { Router } from 'express';

import { S1100 } from '../site-data/designer/1100.js';
import { S1200 } from '../site-data/designer/1200.js';
import { S1300 } from '../site-data/designer/1300.js';
import { S1400 } from '../site-data/designer/1400.js';
import { S1500 } from '../site-data/designer/1500.js';
import { S1600 } from '../site-data/designer/1600.js';
import { S1700 } from '../site-data/designer/1700.js';
import { S1800 } from '../site-data/designer/1800.js';
import { S1900 } from '../site-data/designer/1900.js';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/designer-series', {
    title: 'Designer Series',
  });
});

router.get('/1100', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1100',
    products: S1100,
  });
});

router.get('/1200', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1200',
    products: S1200,
  });
});

router.get('/1300', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1300',
    products: S1300,
  });
});

router.get('/1400', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1400',
    products: S1400,
  });
});

router.get('/1500', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1500',
    products: S1500,
  });
});

router.get('/1600', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1600',
    products: S1600,
  });
});

router.get('/1700', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1700',
    products: S1700,
  });
});

router.get('/1800', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1800',
    products: S1800,
  });
});

router.get('/1900', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Designer Series 1900',
    products: S1900,
  });
});

export default router;
