import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import aboutApplicationPageValidation from '../../cValidation/cFrontendManagement/cAboutApplicationPageValidation';
import aboutApplicationPageController from '../../bController/cFrontendManagement/cAboutApplicationPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AboutApplicationPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AboutApplicationPageModel::retrieve", label: "AboutApplicationPage", name: "Retrieve", skip: true }), 
  aboutApplicationPageValidation.retrieve(), validatorMiddleware, 
  aboutApplicationPageController().retrieve
)

export const aboutApplicationPageRoute = router
