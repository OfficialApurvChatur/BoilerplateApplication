import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminProjectPageValidation from '../../cValidation/bAdminManagement/kAdminProjectPageValidation';
import adminProjectPageController from '../../bController/bAdminManagement/kAdminProjectPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminProjectPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminProjectPageModel-retrieve", label: "AdminProjectPage", name: "Retrieve" }), 
  adminProjectPageValidation.retrieve(), validatorMiddleware, 
  adminProjectPageController().retrieve
)

export const adminProjectPageRoute = router
