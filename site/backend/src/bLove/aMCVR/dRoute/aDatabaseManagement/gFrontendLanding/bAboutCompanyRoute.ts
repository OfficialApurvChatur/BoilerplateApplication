import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import aboutCompanyValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/bAboutCompanyValidation';
import aboutCompanyContorller from '../../../bController/aDatabaseManagement/gFrontendLanding/bAboutCompanyController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AboutCompanyModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutCompany", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AboutCompanyModel-list", label: "AboutCompany", name: "List" }), 
  aboutCompanyValidation.list(), validatorMiddleware, 
  aboutCompanyContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AboutCompanyModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutCompany", accessPoint: ["Create"] }),
  aboutCompanyValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  aboutCompanyContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AboutCompanyModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutCompany", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AboutCompanyModel-retrieve", label: "AboutCompany", name: "Retrieve" }), 
  aboutCompanyValidation.retrieve(), validatorMiddleware, 
  aboutCompanyContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AboutCompanyModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutCompany", accessPoint: ["Update"] }),
  aboutCompanyValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  aboutCompanyContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AboutCompanyModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AboutCompany", accessPoint: ["Delete"] }),
  aboutCompanyValidation.delete(), validatorMiddleware, 
  aboutCompanyContorller().delete
)

export const aboutCompanyRoute = router
