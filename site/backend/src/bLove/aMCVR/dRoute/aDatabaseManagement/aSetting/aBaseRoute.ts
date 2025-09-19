import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import baseValidation from '../../../cValidation/aDatabaseManagement/aSetting/aBaseValidation';
import baseContorller from '../../../bController/aDatabaseManagement/aSetting/aBaseController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"BaseModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"BaseModel-list", label: "Base", name: "List" }), 
  baseValidation.list(), validatorMiddleware, 
  baseContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"BaseModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Create"] }),
  baseValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  baseContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"BaseModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"BaseModel-retrieve", label: "Base", name: "Retrieve" }), 
  baseValidation.retrieve(), validatorMiddleware, 
  baseContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"BaseModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Update"] }),
  baseValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  baseContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"BaseModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Delete"] }),
  baseValidation.delete(), validatorMiddleware, 
  baseContorller().delete
)

export const baseRoute = router
