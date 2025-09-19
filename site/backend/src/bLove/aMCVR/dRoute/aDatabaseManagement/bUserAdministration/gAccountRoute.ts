import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import accountValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/gAccountValidation';
import accountContorller from '../../../bController/aDatabaseManagement/bUserAdministration/gAccountController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AccountModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Account", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AccountModel-list", label: "Account", name: "List" }), 
  accountValidation.list(), validatorMiddleware, 
  accountContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AccountModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Account", accessPoint: ["Create"] }),
  accountValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  accountContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AccountModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Account", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AccountModel-retrieve", label: "Account", name: "Retrieve" }), 
  accountValidation.retrieve(), validatorMiddleware, 
  accountContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AccountModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Account", accessPoint: ["Update"] }),
  accountValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  accountContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AccountModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Account", accessPoint: ["Delete"] }),
  accountValidation.delete(), validatorMiddleware, 
  accountContorller().delete
)

export const accountRoute = router
