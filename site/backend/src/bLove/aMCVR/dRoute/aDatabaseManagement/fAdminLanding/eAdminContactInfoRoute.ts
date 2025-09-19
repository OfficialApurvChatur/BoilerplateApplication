import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminContactInfoValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/eAdminContactInfoValidation';
import adminContactInfoContorller from '../../../bController/aDatabaseManagement/fAdminLanding/eAdminContactInfoController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminContactInfoModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactInfo", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminContactInfoModel-list", label: "AdminContactInfo", name: "List" }), 
  adminContactInfoValidation.list(), validatorMiddleware, 
  adminContactInfoContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminContactInfoModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactInfo", accessPoint: ["Create"] }),
  adminContactInfoValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminContactInfoContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminContactInfoModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactInfo", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminContactInfoModel-retrieve", label: "AdminContactInfo", name: "Retrieve" }), 
  adminContactInfoValidation.retrieve(), validatorMiddleware, 
  adminContactInfoContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminContactInfoModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactInfo", accessPoint: ["Update"] }),
  adminContactInfoValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminContactInfoContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminContactInfoModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactInfo", accessPoint: ["Delete"] }),
  adminContactInfoValidation.delete(), validatorMiddleware, 
  adminContactInfoContorller().delete
)

export const adminContactInfoRoute = router
