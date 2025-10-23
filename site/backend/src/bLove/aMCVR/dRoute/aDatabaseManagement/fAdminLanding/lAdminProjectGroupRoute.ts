import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminProjectGroupValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/lAdminProjectGroupValidation';
import adminProjectGroupController from '../../../bController/aDatabaseManagement/fAdminLanding/lAdminProjectGroupController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectGroup", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminProjectGroupModel-list", label: "AdminProjectGroup", name: "List" }), 
  adminProjectGroupValidation.list(), validatorMiddleware, 
  adminProjectGroupController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectGroup", accessPoint: ["Create"] }),
  adminProjectGroupValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminProjectGroupController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectGroup", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminProjectGroupModel-retrieve", label: "AdminProjectGroup", name: "Retrieve" }), 
  adminProjectGroupValidation.retrieve(), validatorMiddleware, 
  adminProjectGroupController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectGroup", accessPoint: ["Update"] }),
  adminProjectGroupValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminProjectGroupController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProjectGroup", accessPoint: ["Delete"] }),
  adminProjectGroupValidation.delete(), validatorMiddleware, 
  adminProjectGroupController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"AdminProjectGroupModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"AdminProjectGroupModel-list-mini", label: "AdminProjectGroup", name: "List", customMessage: "AdminProjectGroupModel Listed Successfully (Mini)... From Backend Cache" }), 
  adminProjectGroupValidation.listMini(), validatorMiddleware, 
  adminProjectGroupController().listMini
)

export const adminProjectGroupRoute = router
