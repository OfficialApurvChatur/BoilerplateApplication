import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import branchSectionValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/hBranchSectionValidation';
import branchSectionController from '../../../bController/aDatabaseManagement/gFrontendLanding/hBranchSectionController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminBranchSectionModel-list", label: "AdminBranchSection", name: "List" }), 
  branchSectionValidation.list(), validatorMiddleware, 
  branchSectionController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Create"] }),
  branchSectionValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  branchSectionController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminBranchSectionModel-retrieve", label: "AdminBranchSection", name: "Retrieve" }), 
  branchSectionValidation.retrieve(), validatorMiddleware, 
  branchSectionController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Update"] }),
  branchSectionValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  branchSectionController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminBranchSectionModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchSection", accessPoint: ["Delete"] }),
  branchSectionValidation.delete(), validatorMiddleware, 
  branchSectionController().delete
)

export const branchSectionRoute = router
