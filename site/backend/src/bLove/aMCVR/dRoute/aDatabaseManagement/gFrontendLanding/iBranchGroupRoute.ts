import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import branchGroupValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/iBranchGroupValidation';
import branchGroupController from '../../../bController/aDatabaseManagement/gFrontendLanding/iBranchGroupController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"BranchGroupModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "BranchGroup", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"BranchGroupModel-list", label: "BranchGroup", name: "List" }), 
  branchGroupValidation.list(), validatorMiddleware, 
  branchGroupController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"BranchGroupModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "BranchGroup", accessPoint: ["Create"] }),
  branchGroupValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  branchGroupController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"BranchGroupModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "BranchGroup", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"BranchGroupModel-retrieve", label: "BranchGroup", name: "Retrieve" }), 
  branchGroupValidation.retrieve(), validatorMiddleware, 
  branchGroupController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"BranchGroupModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "BranchGroup", accessPoint: ["Update"] }),
  branchGroupValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  branchGroupController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"BranchGroupModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "BranchGroup", accessPoint: ["Delete"] }),
  branchGroupValidation.delete(), validatorMiddleware, 
  branchGroupController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"BranchGroupModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"BranchGroupModel-list-mini", label: "BranchGroup", name: "List", customMessage: "BranchGroupModel Listed Successfully (Mini)... From Backend Cache" }), 
  branchGroupValidation.listMini(), validatorMiddleware, 
  branchGroupController().listMini
)

export const branchGroupRoute = router
