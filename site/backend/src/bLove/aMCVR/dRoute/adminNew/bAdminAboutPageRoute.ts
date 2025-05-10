import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import adminAboutPageValidation from '../../cValidation/adminNew/bAdminAboutPageValidation';
import adminAboutPageController from '../../bController/adminNew/bAdminAboutPageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("adminaboutpage-list", 60, 10), 
  checkCacheMiddleware("adminaboutpage-list", "AdminAboutPage", "List"), 
  adminAboutPageValidation.list(), validatorMiddleware, 
  adminAboutPageController().list
)

export const adminAboutPageRouter = router
