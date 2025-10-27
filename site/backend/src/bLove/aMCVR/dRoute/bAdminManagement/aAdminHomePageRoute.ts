import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminHomePageValidation from '../../cValidation/bAdminManagement/aAdminHomePageValidation';
import adminHomePageController from '../../bController/bAdminManagement/aAdminHomePageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminHomePageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminHomePageModel-retrieve", label: "AdminHomePage", name: "Retrieve" }), 
  adminHomePageValidation.retrieve(), validatorMiddleware, 
  adminHomePageController().retrieve
)

export const adminHomePageRoute = router
