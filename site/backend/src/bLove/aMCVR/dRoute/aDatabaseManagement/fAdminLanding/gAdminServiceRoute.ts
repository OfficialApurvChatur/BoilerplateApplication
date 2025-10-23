import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminServiceValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/gAdminServiceValidation';
import adminServiceController from '../../../bController/aDatabaseManagement/fAdminLanding/gAdminServiceController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminServiceModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminService", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminServiceModel-list", label: "AdminService", name: "List" }), 
  adminServiceValidation.list(), validatorMiddleware, 
  adminServiceController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminServiceModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminService", accessPoint: ["Create"] }),
  adminServiceValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminServiceController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminServiceModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminService", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminServiceModel-retrieve", label: "AdminService", name: "Retrieve" }), 
  adminServiceValidation.retrieve(), validatorMiddleware, 
  adminServiceController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminServiceModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminService", accessPoint: ["Update"] }),
  adminServiceValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminServiceController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminServiceModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminService", accessPoint: ["Delete"] }),
  adminServiceValidation.delete(), validatorMiddleware, 
  adminServiceController().delete
)

export const adminServiceRoute = router
