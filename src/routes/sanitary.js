import { Router } from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render("pages/sanitary",{
    title: "Sanitary Ware",
  })
});

export default router;
