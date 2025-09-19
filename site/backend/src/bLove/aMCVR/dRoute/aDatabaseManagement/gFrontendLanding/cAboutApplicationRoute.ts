import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import aboutApplicationValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/cAboutApplicationValidation';
import aboutApplicationContorller from '../../../bController/aDatabaseManagement/gFrontendLanding/cAboutApplicationController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AboutApplicationModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutApplication", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AboutApplicationModel-list", label: "AboutApplication", name: "List" }), 
  aboutApplicationValidation.list(), validatorMiddleware, 
  aboutApplicationContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AboutApplicationModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutApplication", accessPoint: ["Create"] }),
  aboutApplicationValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  aboutApplicationContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AboutApplicationModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutApplication", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AboutApplicationModel-retrieve", label: "AboutApplication", name: "Retrieve" }), 
  aboutApplicationValidation.retrieve(), validatorMiddleware, 
  aboutApplicationContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AboutApplicationModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutApplication", accessPoint: ["Update"] }),
  aboutApplicationValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  aboutApplicationContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AboutApplicationModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutApplication", accessPoint: ["Delete"] }),
  aboutApplicationValidation.delete(), validatorMiddleware, 
  aboutApplicationContorller().delete
)

export const aboutApplicationRoute = router
