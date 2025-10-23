import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import projectValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/mProjectValidation';
import projectController from '../../../bController/aDatabaseManagement/gFrontendLanding/mProjectController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ProjectModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Project", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ProjectModel-list", label: "Project", name: "List" }), 
  projectValidation.list(), validatorMiddleware, 
  projectController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ProjectModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Project", accessPoint: ["Create"] }),
  projectValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  projectController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ProjectModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Project", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ProjectModel-retrieve", label: "Project", name: "Retrieve" }), 
  projectValidation.retrieve(), validatorMiddleware, 
  projectController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ProjectModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Project", accessPoint: ["Update"] }),
  projectValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  projectController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ProjectModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Project", accessPoint: ["Delete"] }),
  projectValidation.delete(), validatorMiddleware, 
  projectController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"ProjectModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"ProjectModel-list-mini", label: "Project", name: "List", customMessage: "ProjectModel Listed Successfully (Mini)... From Backend Cache" }), 
  projectValidation.listMini(), validatorMiddleware, 
  projectController().listMini
)

export const projectRoute = router
