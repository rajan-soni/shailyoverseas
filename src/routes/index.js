import { Router } from 'express';
import { routes } from '../common/constant.js';
import homeRoute from './home.js';
import aboutRoute from './about.js';
import contactRoute from './contact.js';

const router = new Router();

router.use(routes.HOME, homeRoute);
router.use(routes.ABOUT, aboutRoute);
router.use(routes.CONTACT, contactRoute);

export default router;
