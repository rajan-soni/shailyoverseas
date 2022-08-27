import { Router } from 'express';
import { onePieceData } from '../site-data/one-piece.js';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/sanitary', {
    title: 'Sanitary Ware',
  });
});

router.get('/one-piece-toilet', (req, res, next) => {
  res.render('pages/one-piece-toilet', {
    title: 'One Piece Toilet',
    products: onePieceData,
  });
});

router.get('/two-piece-toilet', (req, res, next) => {
  res.render('pages/two-piece-toilet', {
    title: 'Two Piece Toilet',
  });
});

router.get('/wall-hung', (req, res, next) => {
  res.render('pages/wall-hung', {
    title: 'Wall Hung',
  });
});

router.get('/water-closet', (req, res, next) => {
  res.render('pages/water-closet', {
    title: 'Water Closet',
  });
});

router.get('/table-top-basin', (req, res, next) => {
  res.render('pages/table-top-basin', {
    title: 'Table Top Basin',
  });
});

// TODO: REDIRECT to wash basin page
router.get('/wash-basin', (req, res, next) => {
  res.render('pages/wash-basin', {
    title: 'Wash Basin',
  });
});

router.get('/squatting-pan', (req, res, next) => {
  res.render('pages/squatting-pan', {
    title: 'Squatting Pan',
  });
});

router.get('/urinals', (req, res, next) => {
  res.render('pages/urinals', {
    title: 'Urinals & Tank',
  });
});

export default router;
