import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('pages/contact', {
    title: 'Contact Us',
  });
});

router.post('/submit-form', (req, res, next) => {
  // TODO: add email service here
  res.render('pages/not-found', {
    title: 'Submitted',
  });
});

export default router;
