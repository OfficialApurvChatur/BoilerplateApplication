import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import adminHomePageValidation from '../../cValidation/adminNew/aAdminHomePageValidation';
import adminHomePageController from '../../bController/adminNew/aAdminHomePageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("adminhomepage-list", 60, 10), 
  checkCacheMiddleware("adminhomepage-list", "AdminHomePage", "List"), 
  adminHomePageValidation.list(), validatorMiddleware, 
  adminHomePageController().list
)

export const adminHomePageRouter = router
