import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminBranchGroupValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/iAdminBranchGroupValidation';
import adminBranchGroupController from '../../../bController/aDatabaseManagement/fAdminLanding/iAdminBranchGroupController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchGroup", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminBranchGroupModel-list", label: "AdminBranchGroup", name: "List" }), 
  adminBranchGroupValidation.list(), validatorMiddleware, 
  adminBranchGroupController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchGroup", accessPoint: ["Create"] }),
  adminBranchGroupValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminBranchGroupController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchGroup", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminBranchGroupModel-retrieve", label: "AdminBranchGroup", name: "Retrieve" }), 
  adminBranchGroupValidation.retrieve(), validatorMiddleware, 
  adminBranchGroupController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchGroup", accessPoint: ["Update"] }),
  adminBranchGroupValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminBranchGroupController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminBranchGroup", accessPoint: ["Delete"] }),
  adminBranchGroupValidation.delete(), validatorMiddleware, 
  adminBranchGroupController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"AdminBranchGroupModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"AdminBranchGroupModel-list-mini", label: "AdminBranchGroup", name: "List", customMessage: "AdminBranchGroupModel Listed Successfully (Mini)... From Backend Cache" }), 
  adminBranchGroupValidation.listMini(), validatorMiddleware, 
  adminBranchGroupController().listMini
)

export const adminBranchGroupRoute = router
