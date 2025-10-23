import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import requestValidation from '../../../cValidation/aDatabaseManagement/hChatManagement/cRequestValidation';
import requestController from '../../../bController/aDatabaseManagement/hChatManagement/cRequestController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"RequestModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Request", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"RequestModel-list", label: "Request", name: "List" }), 
  requestValidation.list(), validatorMiddleware, 
  requestController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"RequestModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Request", accessPoint: ["Create"] }),
  requestValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  requestController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"RequestModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Request", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"RequestModel-retrieve", label: "Request", name: "Retrieve" }), 
  requestValidation.retrieve(), validatorMiddleware, 
  requestController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"RequestModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Request", accessPoint: ["Update"] }),
  requestValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  requestController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"RequestModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Request", accessPoint: ["Delete"] }),
  requestValidation.delete(), validatorMiddleware, 
  requestController().delete
)

export const requestRoute = router
