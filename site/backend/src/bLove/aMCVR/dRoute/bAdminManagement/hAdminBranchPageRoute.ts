import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminBranchPageValidation from '../../cValidation/bAdminManagement/hAdminBranchPageValidation';
import adminBranchPageController from '../../bController/bAdminManagement/hAdminBranchPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminBranchPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminBranchPageModel-retrieve", label: "AdminBranchPage", name: "Retrieve" }), 
  adminBranchPageValidation.retrieve(), validatorMiddleware, 
  adminBranchPageController().retrieve
)

export const adminBranchPageRoute = router
