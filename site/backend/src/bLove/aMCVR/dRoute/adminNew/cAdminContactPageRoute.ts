import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../bMiddleware/kAuthorizationMiddleware';

import adminContactPageValidation from '../../cValidation/adminNew/cAdminContactPageValidation';
import adminContactPageController from '../../bController/adminNew/cAdminContactPageController';


const router = express.Router();

router.route("/create").post(
  rateLimiterMiddleware("admincontactpage-create", 60, 10),
  adminContactPageValidation.create(), validatorMiddleware,
  adminContactPageController().create
)

export const adminContactPageRouter = router
