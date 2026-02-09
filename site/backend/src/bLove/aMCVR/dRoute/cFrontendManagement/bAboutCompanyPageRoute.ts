import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import aboutCompanyPageValidation from '../../cValidation/cFrontendManagement/bAboutCompanyPageValidation';
import aboutCompanyPageController from '../../bController/cFrontendManagement/bAboutCompanyPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AboutCompanyPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AboutCompanyPageModel::retrieve", label: "AboutCompanyPage", name: "Retrieve", skip: true }), 
  aboutCompanyPageValidation.retrieve(), validatorMiddleware, 
  aboutCompanyPageController().retrieve
)

export const aboutCompanyPageRoute = router
