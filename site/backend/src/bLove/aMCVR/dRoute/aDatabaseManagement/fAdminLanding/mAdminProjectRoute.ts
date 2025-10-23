import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminProjectValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/mAdminProjectValidation';
import adminProjectController from '../../../bController/aDatabaseManagement/fAdminLanding/mAdminProjectController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminProjectModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProject", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminProjectModel-list", label: "AdminProject", name: "List" }), 
  adminProjectValidation.list(), validatorMiddleware, 
  adminProjectController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminProjectModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProject", accessPoint: ["Create"] }),
  adminProjectValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminProjectController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminProjectModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProject", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminProjectModel-retrieve", label: "AdminProject", name: "Retrieve" }), 
  adminProjectValidation.retrieve(), validatorMiddleware, 
  adminProjectController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminProjectModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProject", accessPoint: ["Update"] }),
  adminProjectValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminProjectController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminProjectModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminProject", accessPoint: ["Delete"] }),
  adminProjectValidation.delete(), validatorMiddleware, 
  adminProjectController().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"AdminProjectModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"AdminProjectModel-list-mini", label: "AdminProject", name: "List", customMessage: "AdminProjectModel Listed Successfully (Mini)... From Backend Cache" }), 
  adminProjectValidation.listMini(), validatorMiddleware, 
  adminProjectController().listMini
)

export const adminProjectRoute = router
