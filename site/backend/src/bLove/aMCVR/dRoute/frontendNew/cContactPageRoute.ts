import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import contactPageValidation from '../../cValidation/frontendNew/cContactPageValidation';
import contactPageController from '../../bController/frontendNew/cContactPageController';


const router = express.Router();

router.route("/create").post(
  rateLimiterMiddleware("contactpage-create", 60, 10),
  contactPageValidation.create(), validatorMiddleware,
  contactPageController().create
)

export const contactPageRouter = router
