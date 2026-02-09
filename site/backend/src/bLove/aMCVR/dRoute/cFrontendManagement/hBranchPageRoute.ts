import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import branchPageValidation from '../../cValidation/cFrontendManagement/hBranchPageValidation';
import branchPageController from '../../bController/cFrontendManagement/hBranchPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"BranchPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"BranchPageModel::retrieve", label: "BranchPage", name: "Retrieve", skip: true }), 
  branchPageValidation.retrieve(), validatorMiddleware, 
  branchPageController().retrieve
)

export const branchPageRoute = router
