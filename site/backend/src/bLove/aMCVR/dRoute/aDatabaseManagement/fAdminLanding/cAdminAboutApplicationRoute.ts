import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminAboutApplicationValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationValidation';
import adminAboutApplicationContorller from '../../../bController/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminAboutApplicationModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutApplication", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminAboutApplicationModel-list", label: "AdminAboutApplication", name: "List" }), 
  adminAboutApplicationValidation.list(), validatorMiddleware, 
  adminAboutApplicationContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminAboutApplicationModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutApplication", accessPoint: ["Create"] }),
  adminAboutApplicationValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminAboutApplicationContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminAboutApplicationModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutApplication", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminAboutApplicationModel-retrieve", label: "AdminAboutApplication", name: "Retrieve" }), 
  adminAboutApplicationValidation.retrieve(), validatorMiddleware, 
  adminAboutApplicationContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminAboutApplicationModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutApplication", accessPoint: ["Update"] }),
  adminAboutApplicationValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminAboutApplicationContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminAboutApplicationModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutApplication", accessPoint: ["Delete"] }),
  adminAboutApplicationValidation.delete(), validatorMiddleware, 
  adminAboutApplicationContorller().delete
)

export const adminAboutApplicationRoute = router
