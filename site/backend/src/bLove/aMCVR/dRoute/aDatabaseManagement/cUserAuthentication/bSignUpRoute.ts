import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import signUpValidation from '../../../cValidation/aDatabaseManagement/cUserAuthentication/bSignUpValidation';
import signUpContorller from '../../../bController/aDatabaseManagement/cUserAuthentication/bSignUpController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"SignUpModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignUp", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"SignUpModel-list", label: "SignUp", name: "List" }), 
  signUpValidation.list(), validatorMiddleware, 
  signUpContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"SignUpModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignUp", accessPoint: ["Create"] }),
  signUpValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  signUpContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"SignUpModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignUp", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"SignUpModel-retrieve", label: "SignUp", name: "Retrieve" }), 
  signUpValidation.retrieve(), validatorMiddleware, 
  signUpContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"SignUpModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignUp", accessPoint: ["Update"] }),
  signUpValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  signUpContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"SignUpModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignUp", accessPoint: ["Delete"] }),
  signUpValidation.delete(), validatorMiddleware, 
  signUpContorller().delete
)

router.route("/primary").post(
  rateLimiterMiddleware({ key:"SignUpModel-primary", time: 60, limit: 10 }),
  signUpValidation.signUp(), validatorMiddleware, 
  signUpContorller().signUp
)

export const signUpRoute = router
