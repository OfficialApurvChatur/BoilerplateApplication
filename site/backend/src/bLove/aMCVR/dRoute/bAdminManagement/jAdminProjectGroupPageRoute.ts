import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminProjectGroupPageValidation from '../../cValidation/bAdminManagement/jAdminProjectGroupPageValidation';
import adminProjectGroupPageController from '../../bController/bAdminManagement/jAdminProjectGroupPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminProjectGroupPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminProjectGroupPageModel-retrieve", label: "AdminProjectGroupPage", name: "Retrieve" }), 
  adminProjectGroupPageValidation.retrieve(), validatorMiddleware, 
  adminProjectGroupPageController().retrieve
)

export const adminProjectGroupPageRoute = router
