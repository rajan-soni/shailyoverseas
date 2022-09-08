import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render("pages/about",{
    title: "About Us",
  })
});

export default router;
