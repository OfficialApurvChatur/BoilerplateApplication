import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import staticContentValidation from '../../../cValidation/aDatabaseManagement/eContentOperation/aStaticContentValidation';
import staticContentContorller from '../../../bController/aDatabaseManagement/eContentOperation/aStaticContentController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"StaticContentModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "StaticContent", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"StaticContentModel-list", label: "StaticContent", name: "List" }), 
  staticContentValidation.list(), validatorMiddleware, 
  staticContentContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"StaticContentModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "StaticContent", accessPoint: ["Create"] }),
  staticContentValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  staticContentContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"StaticContentModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "StaticContent", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"StaticContentModel-retrieve", label: "StaticContent", name: "Retrieve" }), 
  staticContentValidation.retrieve(), validatorMiddleware, 
  staticContentContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"StaticContentModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "StaticContent", accessPoint: ["Update"] }),
  staticContentValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  staticContentContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"StaticContentModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "StaticContent", accessPoint: ["Delete"] }),
  staticContentValidation.delete(), validatorMiddleware, 
  staticContentContorller().delete
)

export const staticContentRoute = router
