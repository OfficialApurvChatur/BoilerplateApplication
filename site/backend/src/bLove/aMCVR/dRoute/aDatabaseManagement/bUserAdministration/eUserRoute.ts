import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import userValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/eUserValidation';
import userContorller from '../../../bController/aDatabaseManagement/bUserAdministration/eUserController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"UserModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "User", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"UserModel-list", label: "User", name: "List" }), 
  userValidation.list(), validatorMiddleware, 
  userContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"UserModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "User", accessPoint: ["Create"] }),
  userValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  userContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"UserModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "User", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"UserModel-retrieve", label: "User", name: "Retrieve" }), 
  userValidation.retrieve(), validatorMiddleware, 
  userContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"UserModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "User", accessPoint: ["Update"] }),
  userValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  userContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"UserModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "User", accessPoint: ["Delete"] }),
  userValidation.delete(), validatorMiddleware, 
  userContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"UserModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"UserModel-list-mini", label: "User", name: "List", customMessage: "UserModel Listed Successfully (Mini)... From Backend Cache" }), 
  userValidation.listMini(), validatorMiddleware, 
  userContorller().listMini
)

export const userRoute = router
