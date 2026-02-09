import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import branchGroupPageValidation from '../../cValidation/cFrontendManagement/gBranchGroupPageValidation';
import branchGroupPageController from '../../bController/cFrontendManagement/gBranchGroupPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"BranchGroupPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"BranchGroupPageModel::retrieve", label: "BranchGroupPage", name: "Retrieve", skip: true }), 
  branchGroupPageValidation.retrieve(), validatorMiddleware, 
  branchGroupPageController().retrieve
)

export const branchGroupPageRoute = router
