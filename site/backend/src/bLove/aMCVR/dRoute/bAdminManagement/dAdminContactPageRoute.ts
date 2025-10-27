import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminContactPageValidation from '../../cValidation/bAdminManagement/dAdminContactPageValidation';
import adminContactPageController from '../../bController/bAdminManagement/dAdminContactPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminContactPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminContactPageModel-retrieve", label: "AdminContactPage", name: "Retrieve" }), 
  adminContactPageValidation.retrieve(), validatorMiddleware, 
  adminContactPageController().retrieve
)

export const adminContactPageRoute = router
