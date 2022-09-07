import { Router } from 'express';
import { routes } from '../common/constant.js';
import homeRoute from './home.js';
import aboutRoute from './about.js';
import contactRoute from './contact.js';
import sanitaryRoute from './sanitary.js';
import washbasinRoute from './washbasin.js';
import designerSeriesRoute from './designer-series.js';

const router = new Router();

router.use(routes.HOME, homeRoute);
router.use(routes.ABOUT, aboutRoute);
router.use(routes.CONTACT, contactRoute);
router.use(routes.SANITARY, sanitaryRoute);
router.use(routes.WASHBASIN, washbasinRoute);
router.use(routes.DESIGNER, designerSeriesRoute);

export default router;
