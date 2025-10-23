import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import messageValidation from '../../../cValidation/aDatabaseManagement/hChatManagement/bMessageValidation';
import messageController from '../../../bController/aDatabaseManagement/hChatManagement/bMessageController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"MessageModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Message", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"MessageModel-list", label: "Message", name: "List" }), 
  messageValidation.list(), validatorMiddleware, 
  messageController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"MessageModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Message", accessPoint: ["Create"] }),
  messageValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  messageController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"MessageModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Message", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"MessageModel-retrieve", label: "Message", name: "Retrieve" }), 
  messageValidation.retrieve(), validatorMiddleware, 
  messageController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"MessageModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Message", accessPoint: ["Update"] }),
  messageValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  messageController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"MessageModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Message", accessPoint: ["Delete"] }),
  messageValidation.delete(), validatorMiddleware, 
  messageController().delete
)

export const messageRoute = router
