import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import contactPageValidation from '../../cValidation/cFrontendManagement/dContactPageValidation';
import contactPageController from '../../bController/cFrontendManagement/dContactPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"ContactPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"ContactPageModel::retrieve", label: "ContactPage", name: "Retrieve", skip: true }), 
  contactPageValidation.retrieve(), validatorMiddleware, 
  contactPageController().retrieve
)

export const contactPageRoute = router
