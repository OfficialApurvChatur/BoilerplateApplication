import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminBranchValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/jAdminBranchValidation';
import adminBranchController from '../../../bController/aDatabaseManagement/fAdminLanding/jAdminBranchController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminBranchModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranch", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminBranchModel-list", label: "AdminBranch", name: "List" }), 
  adminBranchValidation.list(), validatorMiddleware, 
  adminBranchController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminBranchModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranch", accessPoint: ["Create"] }),
  adminBranchValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminBranchController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminBranchModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranch", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminBranchModel-retrieve", label: "AdminBranch", name: "Retrieve" }), 
  adminBranchValidation.retrieve(), validatorMiddleware, 
  adminBranchController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminBranchModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranch", accessPoint: ["Update"] }),
  adminBranchValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminBranchController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminBranchModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranch", accessPoint: ["Delete"] }),
  adminBranchValidation.delete(), validatorMiddleware, 
  adminBranchController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"AdminBranchModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"AdminBranchModel-list-mini", label: "AdminBranch", name: "List", customMessage: "AdminBranchModel Listed Successfully (Mini)... From Backend Cache" }), 
  adminBranchValidation.listMini(), validatorMiddleware, 
  adminBranchController().listMini
)

export const adminBranchRoute = router
