import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import homePageValidation from '../../cValidation/frontendNew/aHomePageValidation';
import homePageController from '../../bController/frontendNew/aHomePageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("homepage-list", 60, 10), 
  checkCacheMiddleware("homepage-list", "HomePage", "List"), 
  homePageValidation.list(), validatorMiddleware, 
  homePageController().list
)

export const homePageRouter = router
