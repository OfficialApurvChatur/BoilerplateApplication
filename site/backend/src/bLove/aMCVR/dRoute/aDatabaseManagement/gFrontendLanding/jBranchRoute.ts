import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import branchValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/jBranchValidation';
import branchController from '../../../bController/aDatabaseManagement/gFrontendLanding/jBranchController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"BranchModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Branch", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"BranchModel-list", label: "Branch", name: "List" }), 
  branchValidation.list(), validatorMiddleware, 
  branchController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"BranchModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Branch", accessPoint: ["Create"] }),
  branchValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  branchController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"BranchModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Branch", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"BranchModel-retrieve", label: "Branch", name: "Retrieve" }), 
  branchValidation.retrieve(), validatorMiddleware, 
  branchController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"BranchModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Branch", accessPoint: ["Update"] }),
  branchValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  branchController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"BranchModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Branch", accessPoint: ["Delete"] }),
  branchValidation.delete(), validatorMiddleware, 
  branchController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"BranchModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"BranchModel-list-mini", label: "Branch", name: "List", customMessage: "BranchModel Listed Successfully (Mini)... From Backend Cache" }), 
  branchValidation.listMini(), validatorMiddleware, 
  branchController().listMini
)

export const branchRoute = router
