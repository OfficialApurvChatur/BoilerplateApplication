import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';

import userAccountValidation from '../../../cValidation/admin/bUserAdministration/dUserAccountValidation';
import userAccountController from '../../../bController/admin/bUserAdministration/dUserAccountController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware("account-retrieve", 60, 10),
  authenticationMiddleware,
  userAccountValidation.retrieve(), validatorMiddleware, 
  userAccountController().retrieve
)

router.route("/update").put(
  rateLimiterMiddleware("account-update", 60, 10), 
  authenticationMiddleware,
  userAccountValidation.update(), validatorMiddleware, 
  userAccountController().update,
);

router.route("/email-update").put(
  rateLimiterMiddleware("account-email-update", 60, 10), 
  authenticationMiddleware,
  userAccountValidation.emailUpdate(), validatorMiddleware, 
  userAccountController().emailUpdate,
);

router.route("/password-update").put(
  rateLimiterMiddleware("account-password-update", 60, 10), 
  authenticationMiddleware,
  userAccountValidation.passwordUpdate(), validatorMiddleware, 
  userAccountController().passwordUpdate,
);

export const userAccountRouter = router
