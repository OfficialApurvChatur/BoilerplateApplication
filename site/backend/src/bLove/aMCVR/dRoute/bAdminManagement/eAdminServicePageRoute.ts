import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminServicePageValidation from '../../cValidation/bAdminManagement/eAdminServicePageValidation';
import adminServicePageController from '../../bController/bAdminManagement/eAdminServicePageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminServicePageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminServicePageModel-retrieve", label: "AdminServicePage", name: "Retrieve" }), 
  adminServicePageValidation.retrieve(), validatorMiddleware, 
  adminServicePageController().retrieve
)

export const adminServicePageRoute = router
