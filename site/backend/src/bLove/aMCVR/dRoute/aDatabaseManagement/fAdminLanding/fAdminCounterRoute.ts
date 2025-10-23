import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminCounterValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/fAdminCounterValidation';
import adminCounterController from '../../../bController/aDatabaseManagement/fAdminLanding/fAdminCounterController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminCounterModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminCounter", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminCounterModel-list", label: "AdminCounter", name: "List" }), 
  adminCounterValidation.list(), validatorMiddleware, 
  adminCounterController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminCounterModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminCounter", accessPoint: ["Create"] }),
  adminCounterValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminCounterController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminCounterModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminCounter", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminCounterModel-retrieve", label: "AdminCounter", name: "Retrieve" }), 
  adminCounterValidation.retrieve(), validatorMiddleware, 
  adminCounterController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminCounterModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminCounter", accessPoint: ["Update"] }),
  adminCounterValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminCounterController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminCounterModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminCounter", accessPoint: ["Delete"] }),
  adminCounterValidation.delete(), validatorMiddleware, 
  adminCounterController().delete
)

export const adminCounterRoute = router
