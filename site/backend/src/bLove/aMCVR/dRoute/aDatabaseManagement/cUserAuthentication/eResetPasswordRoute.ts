import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import resetPasswordValidation from '../../../cValidation/aDatabaseManagement/cUserAuthentication/eResetPasswordValidation';
import resetPasswordContorller from '../../../bController/aDatabaseManagement/cUserAuthentication/eResetPasswordController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ResetPasswordModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ResetPassword", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ResetPasswordModel-list", label: "ResetPassword", name: "List" }), 
  resetPasswordValidation.list(), validatorMiddleware, 
  resetPasswordContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ResetPasswordModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ResetPassword", accessPoint: ["Create"] }),
  resetPasswordValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  resetPasswordContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ResetPasswordModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ResetPassword", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ResetPasswordModel-retrieve", label: "ResetPassword", name: "Retrieve" }), 
  resetPasswordValidation.retrieve(), validatorMiddleware, 
  resetPasswordContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ResetPasswordModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ResetPassword", accessPoint: ["Update"] }),
  resetPasswordValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  resetPasswordContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ResetPasswordModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ResetPassword", accessPoint: ["Delete"] }),
  resetPasswordValidation.delete(), validatorMiddleware, 
  resetPasswordContorller().delete
)

export const resetPasswordRoute = router
