import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminBranchSectionPageValidation from '../../cValidation/bAdminManagement/fAdminBranchSectionPageValidation';
import adminBranchSectionPageController from '../../bController/bAdminManagement/fAdminBranchSectionPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminBranchSectionPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminBranchSectionPageModel-retrieve", label: "AdminBranchSectionPage", name: "Retrieve" }), 
  adminBranchSectionPageValidation.retrieve(), validatorMiddleware, 
  adminBranchSectionPageController().retrieve
)

export const adminBranchSectionPageRoute = router
