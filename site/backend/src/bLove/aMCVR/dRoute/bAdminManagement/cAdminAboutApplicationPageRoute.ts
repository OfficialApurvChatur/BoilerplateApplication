import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminAboutApplicationPageValidation from '../../cValidation/bAdminManagement/cAdminAboutApplicationPageValidation';
import adminAboutApplicationPageController from '../../bController/bAdminManagement/cAdminAboutApplicationPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminAboutApplicationPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminAboutApplicationPageModel-retrieve", label: "AdminAboutApplicationPage", name: "Retrieve" }), 
  adminAboutApplicationPageValidation.retrieve(), validatorMiddleware, 
  adminAboutApplicationPageController().retrieve
)

export const adminAboutApplicationPageRoute = router
