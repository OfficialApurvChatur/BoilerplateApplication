import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import servicePageValidation from '../../cValidation/cFrontendManagement/eServicePageValidation';
import servicePageController from '../../bController/cFrontendManagement/eServicePageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"ServicePageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"ServicePageModel::retrieve", label: "ServicePage", name: "Retrieve", skip: true }), 
  servicePageValidation.retrieve(), validatorMiddleware, 
  servicePageController().retrieve
)

export const servicePageRoute = router
