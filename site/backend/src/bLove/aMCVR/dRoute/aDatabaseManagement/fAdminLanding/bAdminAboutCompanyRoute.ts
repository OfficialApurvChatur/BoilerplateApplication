import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminAboutCompanyValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyValidation';
import adminAboutCompanyContorller from '../../../bController/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminAboutCompanyModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutCompany", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminAboutCompanyModel-list", label: "AdminAboutCompany", name: "List" }), 
  adminAboutCompanyValidation.list(), validatorMiddleware, 
  adminAboutCompanyContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminAboutCompanyModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutCompany", accessPoint: ["Create"] }),
  adminAboutCompanyValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminAboutCompanyContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminAboutCompanyModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutCompany", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminAboutCompanyModel-retrieve", label: "AdminAboutCompany", name: "Retrieve" }), 
  adminAboutCompanyValidation.retrieve(), validatorMiddleware, 
  adminAboutCompanyContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminAboutCompanyModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutCompany", accessPoint: ["Update"] }),
  adminAboutCompanyValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminAboutCompanyContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminAboutCompanyModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminAboutCompany", accessPoint: ["Delete"] }),
  adminAboutCompanyValidation.delete(), validatorMiddleware, 
  adminAboutCompanyContorller().delete
)

export const adminAboutCompanyRoute = router
