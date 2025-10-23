import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminBranchSectionValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/hAdminBranchSectionValidation';
import adminBranchSectionController from '../../../bController/aDatabaseManagement/fAdminLanding/hAdminBranchSectionController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminBranchSectionModel-list", label: "AdminBranchSection", name: "List" }), 
  adminBranchSectionValidation.list(), validatorMiddleware, 
  adminBranchSectionController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Create"] }),
  adminBranchSectionValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminBranchSectionController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminBranchSectionModel-retrieve", label: "AdminBranchSection", name: "Retrieve" }), 
  adminBranchSectionValidation.retrieve(), validatorMiddleware, 
  adminBranchSectionController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Update"] }),
  adminBranchSectionValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminBranchSectionController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Delete"] }),
  adminBranchSectionValidation.delete(), validatorMiddleware, 
  adminBranchSectionController().delete
)

export const adminBranchSectionRoute = router
