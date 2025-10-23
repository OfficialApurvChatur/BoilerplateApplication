import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import projectGroupValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/lProjectGroupValidation';
import projectGroupController from '../../../bController/aDatabaseManagement/gFrontendLanding/lProjectGroupController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ProjectGroupModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectGroup", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ProjectGroupModel-list", label: "ProjectGroup", name: "List" }), 
  projectGroupValidation.list(), validatorMiddleware, 
  projectGroupController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ProjectGroupModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectGroup", accessPoint: ["Create"] }),
  projectGroupValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  projectGroupController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ProjectGroupModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectGroup", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ProjectGroupModel-retrieve", label: "ProjectGroup", name: "Retrieve" }), 
  projectGroupValidation.retrieve(), validatorMiddleware, 
  projectGroupController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ProjectGroupModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectGroup", accessPoint: ["Update"] }),
  projectGroupValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  projectGroupController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ProjectGroupModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectGroup", accessPoint: ["Delete"] }),
  projectGroupValidation.delete(), validatorMiddleware, 
  projectGroupController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"ProjectGroupModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"ProjectGroupModel-list-mini", label: "ProjectGroup", name: "List", customMessage: "ProjectGroupModel Listed Successfully (Mini)... From Backend Cache" }), 
  projectGroupValidation.listMini(), validatorMiddleware, 
  projectGroupController().listMini
)

export const projectGroupRoute = router
