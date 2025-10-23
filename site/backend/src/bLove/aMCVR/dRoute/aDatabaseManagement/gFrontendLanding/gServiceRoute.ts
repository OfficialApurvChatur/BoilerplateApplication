import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import serviceValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/gServiceValidation';
import serviceController from '../../../bController/aDatabaseManagement/gFrontendLanding/gServiceController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ServiceModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Service", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ServiceModel-list", label: "Service", name: "List" }), 
  serviceValidation.list(), validatorMiddleware, 
  serviceController().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ServiceModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Service", accessPoint: ["Create"] }),
  serviceValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  serviceController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ServiceModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Service", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ServiceModel-retrieve", label: "Service", name: "Retrieve" }), 
  serviceValidation.retrieve(), validatorMiddleware, 
  serviceController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ServiceModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Service", accessPoint: ["Update"] }),
  serviceValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  serviceController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ServiceModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Service", accessPoint: ["Delete"] }),
  serviceValidation.delete(), validatorMiddleware, 
  serviceController().delete
)

export const serviceRoute = router
