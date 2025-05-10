import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import aboutPageValidation from '../../cValidation/frontendNew/bAboutPageValidation';
import aboutPageController from '../../bController/frontendNew/bAboutPageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("aboutpage-list", 60, 10), 
  checkCacheMiddleware("aboutpage-list", "AboutPage", "List"), 
  aboutPageValidation.list(), validatorMiddleware, 
  aboutPageController().list
)

export const aboutPageRouter = router
