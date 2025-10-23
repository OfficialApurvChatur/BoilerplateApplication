import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import projectSectionValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/kProjectSectionValidation';
import projectSectionController from '../../../bController/aDatabaseManagement/gFrontendLanding/kProjectSectionController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ProjectSectionModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectSection", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ProjectSectionModel-list", label: "ProjectSection", name: "List" }), 
  projectSectionValidation.list(), validatorMiddleware, 
  projectSectionController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ProjectSectionModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectSection", accessPoint: ["Create"] }),
  projectSectionValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  projectSectionController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ProjectSectionModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectSection", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ProjectSectionModel-retrieve", label: "ProjectSection", name: "Retrieve" }), 
  projectSectionValidation.retrieve(), validatorMiddleware, 
  projectSectionController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ProjectSectionModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectSection", accessPoint: ["Update"] }),
  projectSectionValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  projectSectionController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ProjectSectionModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ProjectSection", accessPoint: ["Delete"] }),
  projectSectionValidation.delete(), validatorMiddleware, 
  projectSectionController().delete
)

export const projectSectionRoute = router
