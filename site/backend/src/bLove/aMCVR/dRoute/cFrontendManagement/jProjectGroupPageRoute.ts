import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import projectGroupPageValidation from '../../cValidation/cFrontendManagement/jProjectGroupPageValidation';
import projectGroupPageController from '../../bController/cFrontendManagement/jProjectGroupPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"ProjectGroupPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"ProjectGroupPageModel::retrieve", label: "ProjectGroupPage", name: "Retrieve", skip: true }), 
  projectGroupPageValidation.retrieve(), validatorMiddleware, 
  projectGroupPageController().retrieve
)

export const projectGroupPageRoute = router
