import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import projectPageValidation from '../../cValidation/cFrontendManagement/kProjectPageValidation';
import projectPageController from '../../bController/cFrontendManagement/kProjectPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"ProjectPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"ProjectPageModel::retrieve", label: "ProjectPage", name: "Retrieve", skip: true }), 
  projectPageValidation.retrieve(), validatorMiddleware, 
  projectPageController().retrieve
)

export const projectPageRoute = router
