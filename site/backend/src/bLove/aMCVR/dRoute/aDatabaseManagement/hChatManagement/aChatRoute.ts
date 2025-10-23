import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import chatValidation from '../../../cValidation/aDatabaseManagement/hChatManagement/aChatValidation';
import chatController from '../../../bController/aDatabaseManagement/hChatManagement/aChatController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ChatModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Chat", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ChatModel-list", label: "Chat", name: "List" }), 
  chatValidation.list(), validatorMiddleware, 
  chatController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ChatModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Chat", accessPoint: ["Create"] }),
  chatValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  chatController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ChatModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Chat", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ChatModel-retrieve", label: "Chat", name: "Retrieve" }), 
  chatValidation.retrieve(), validatorMiddleware, 
  chatController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ChatModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Chat", accessPoint: ["Update"] }),
  chatValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  chatController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ChatModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Chat", accessPoint: ["Delete"] }),
  chatValidation.delete(), validatorMiddleware, 
  chatController().delete
)

export const chatRoute = router
