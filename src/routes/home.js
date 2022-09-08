import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render("pages/index",{
    title: "Home",
  })
});

export default router;
