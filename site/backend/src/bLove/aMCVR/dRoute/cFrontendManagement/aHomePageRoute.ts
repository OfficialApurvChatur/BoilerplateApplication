import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import homePageValidation from '../../cValidation/cFrontendManagement/aHomePageValidation';
import homePageController from '../../bController/cFrontendManagement/aHomePageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"HomePageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"HomePageModel::retrieve", label: "HomePage", name: "Retrieve", skip: true }), 
  homePageValidation.retrieve(), validatorMiddleware, 
  homePageController().retrieve
)

export const homePageRoute = router
