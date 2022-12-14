import { Router } from 'express';
import { onePieceData } from '../site-data/one-piece.js';
import { twoPieceData } from '../site-data/two-piece.js';
import { wallHungData } from '../site-data/wall-hung.js';
import { waterClosetData } from '../site-data/water-closet.js';
import { tableTopBasinData } from '../site-data/table-top-basin.js';
import { squattingPanData } from '../site-data/squatting-pan.js';
import { urinalsData } from '../site-data/urinals.js';
import { washbasinData } from '../site-data/wash-basin.js';
import { basinPedestalData } from '../site-data/basin-pedestal.js';
import { woodenData } from '../site-data/wooden.js';
import { rusticData } from '../site-data/rustic.js';
import { seriesData } from '../site-data/designer.js';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/sanitary', {
    title: 'Sanitary Ware',
  });
});

router.get('/one-piece-toilet', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'One Piece Toilet',
    products: onePieceData,
  });
});

router.get('/two-piece-toilet', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Two Piece Toilet',
    products: twoPieceData,
  });
});

router.get('/wall-hung', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Wall Hung',
    products: wallHungData,
  });
});

router.get('/water-closet', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Water Closet',
    products: waterClosetData,
  });
});

router.get('/table-top-basin', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Table Top Basin',
    products: tableTopBasinData,
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
  res.render('pages/designer-series', {
    title: 'Designer Series',
    series: seriesData,
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

router.get('/squatting-pan', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Squatting Pan',
    products: squattingPanData,
  });
});

router.get('/urinals', (req, res, next) => {
  res.render('pages/single-product', {
    title: 'Urinals & Tank',
    products: urinalsData,
  });
});

export default router;
