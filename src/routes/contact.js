import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render("pages/contact",{
    title: "Contact Us",
  })
});

export default router;
