import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import forgotPasswordValidation from '../../../cValidation/aDatabaseManagement/cUserAuthentication/dForgotPasswordValidation';
import forgotPasswordContorller from '../../../bController/aDatabaseManagement/cUserAuthentication/dForgotPasswordController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ForgotPasswordModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ForgotPassword", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ForgotPasswordModel-list", label: "ForgotPassword", name: "List" }), 
  forgotPasswordValidation.list(), validatorMiddleware, 
  forgotPasswordContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ForgotPasswordModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ForgotPassword", accessPoint: ["Create"] }),
  forgotPasswordValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  forgotPasswordContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ForgotPasswordModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ForgotPassword", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ForgotPasswordModel-retrieve", label: "ForgotPassword", name: "Retrieve" }), 
  forgotPasswordValidation.retrieve(), validatorMiddleware, 
  forgotPasswordContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ForgotPasswordModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ForgotPassword", accessPoint: ["Update"] }),
  forgotPasswordValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  forgotPasswordContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ForgotPasswordModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ForgotPassword", accessPoint: ["Delete"] }),
  forgotPasswordValidation.delete(), validatorMiddleware, 
  forgotPasswordContorller().delete
)

export const forgotPasswordRoute = router
