import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminBranchGroupPageValidation from '../../cValidation/bAdminManagement/gAdminBranchGroupPageValidation';
import adminBranchGroupPageController from '../../bController/bAdminManagement/gAdminBranchGroupPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminBranchGroupPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminBranchGroupPageModel-retrieve", label: "AdminBranchGroupPage", name: "Retrieve" }), 
  adminBranchGroupPageValidation.retrieve(), validatorMiddleware, 
  adminBranchGroupPageController().retrieve
)

export const adminBranchGroupPageRoute = router
