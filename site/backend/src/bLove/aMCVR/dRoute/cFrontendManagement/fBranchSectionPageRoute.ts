import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import branchSectionPageValidation from '../../cValidation/cFrontendManagement/fBranchSectionPageValidation';
import branchSectionPageController from '../../bController/cFrontendManagement/fBranchSectionPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"BranchSectionPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"BranchSectionPageModel::retrieve", label: "BranchSectionPage", name: "Retrieve", skip: true }), 
  branchSectionPageValidation.retrieve(), validatorMiddleware, 
  branchSectionPageController().retrieve
)

export const branchSectionPageRoute = router
