import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import signInValidation from '../../../cValidation/aDatabaseManagement/cUserAuthentication/aSignInValidation';
import signInContorller from '../../../bController/aDatabaseManagement/cUserAuthentication/aSignInController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"SignInModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignIn", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"SignInModel-list", label: "SignIn", name: "List" }), 
  signInValidation.list(), validatorMiddleware, 
  signInContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"SignInModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignIn", accessPoint: ["Create"] }),
  signInValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  signInContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"SignInModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignIn", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"SignInModel-retrieve", label: "SignIn", name: "Retrieve" }), 
  signInValidation.retrieve(), validatorMiddleware, 
  signInContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"SignInModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignIn", accessPoint: ["Update"] }),
  signInValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  signInContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"SignInModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignIn", accessPoint: ["Delete"] }),
  signInValidation.delete(), validatorMiddleware, 
  signInContorller().delete
)

router.route("/primary").post(
  rateLimiterMiddleware({ key:"SignInModel-primary", time: 60, limit: 10 }),
  signInValidation.signIn(), validatorMiddleware, 
  signInContorller().signIn
)

export const signInRoute = router
