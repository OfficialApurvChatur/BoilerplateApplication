import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminProjectSectionValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/kAdminProjectSectionValidation';
import adminProjectSectionController from '../../../bController/aDatabaseManagement/fAdminLanding/kAdminProjectSectionController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminProjectSectionModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectSection", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminProjectSectionModel-list", label: "AdminProjectSection", name: "List" }), 
  adminProjectSectionValidation.list(), validatorMiddleware, 
  adminProjectSectionController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminProjectSectionModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectSection", accessPoint: ["Create"] }),
  adminProjectSectionValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminProjectSectionController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminProjectSectionModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectSection", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminProjectSectionModel-retrieve", label: "AdminProjectSection", name: "Retrieve" }), 
  adminProjectSectionValidation.retrieve(), validatorMiddleware, 
  adminProjectSectionController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminProjectSectionModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectSection", accessPoint: ["Update"] }),
  adminProjectSectionValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminProjectSectionController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminProjectSectionModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectSection", accessPoint: ["Delete"] }),
  adminProjectSectionValidation.delete(), validatorMiddleware, 
  adminProjectSectionController().delete
)

export const adminProjectSectionRoute = router
