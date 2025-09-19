import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import apiLogValidation from '../../../cValidation/aDatabaseManagement/aSetting/bAPILogValidation';
import apiLogContorller from '../../../bController/aDatabaseManagement/aSetting/bAPILogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"APILogModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "APILog", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"APILogModel-list", label: "APILog", name: "List" }), 
  apiLogValidation.list(), validatorMiddleware, 
  apiLogContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"APILogModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "APILog", accessPoint: ["Create"] }),
  apiLogValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  apiLogContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"APILogModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "APILog", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"APILogModel-retrieve", label: "APILog", name: "Retrieve" }), 
  apiLogValidation.retrieve(), validatorMiddleware, 
  apiLogContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"APILogModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "APILog", accessPoint: ["Update"] }),
  apiLogValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  apiLogContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"APILogModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "APILog", accessPoint: ["Delete"] }),
  apiLogValidation.delete(), validatorMiddleware, 
  apiLogContorller().delete
)

export const apiLogRoute = router
