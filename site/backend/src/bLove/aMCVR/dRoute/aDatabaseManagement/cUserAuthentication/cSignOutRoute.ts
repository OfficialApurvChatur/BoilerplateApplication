import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import signOutValidation from '../../../cValidation/aDatabaseManagement/cUserAuthentication/cSignOutValidation';
import signOutContorller from '../../../bController/aDatabaseManagement/cUserAuthentication/cSignOutController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"SignOutModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignOut", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"SignOutModel-list", label: "SignOut", name: "List" }), 
  signOutValidation.list(), validatorMiddleware, 
  signOutContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"SignOutModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignOut", accessPoint: ["Create"] }),
  signOutValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  signOutContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"SignOutModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignOut", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"SignOutModel-retrieve", label: "SignOut", name: "Retrieve" }), 
  signOutValidation.retrieve(), validatorMiddleware, 
  signOutContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"SignOutModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignOut", accessPoint: ["Update"] }),
  signOutValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  signOutContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"SignOutModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SignOut", accessPoint: ["Delete"] }),
  signOutValidation.delete(), validatorMiddleware, 
  signOutContorller().delete
)

router.route("/primary").get(
  rateLimiterMiddleware({ key:"SignOutModel-primary", time: 60, limit: 10 }),
  signOutValidation.signOut(), validatorMiddleware, 
  signOutContorller().signOut,
);

export const signOutRoute = router
