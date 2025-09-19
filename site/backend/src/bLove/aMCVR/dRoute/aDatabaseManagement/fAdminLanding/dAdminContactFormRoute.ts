import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminContactFormValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/dAdminContactFormValidation';
import adminContactFormContorller from '../../../bController/aDatabaseManagement/fAdminLanding/dAdminContactFormController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminContactFormModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactForm", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminContactFormModel-list", label: "AdminContactForm", name: "List" }), 
  adminContactFormValidation.list(), validatorMiddleware, 
  adminContactFormContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminContactFormModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactForm", accessPoint: ["Create"] }),
  adminContactFormValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminContactFormContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminContactFormModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactForm", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminContactFormModel-retrieve", label: "AdminContactForm", name: "Retrieve" }), 
  adminContactFormValidation.retrieve(), validatorMiddleware, 
  adminContactFormContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminContactFormModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactForm", accessPoint: ["Update"] }),
  adminContactFormValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminContactFormContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminContactFormModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminContactForm", accessPoint: ["Delete"] }),
  adminContactFormValidation.delete(), validatorMiddleware, 
  adminContactFormContorller().delete
)

export const adminContactFormRoute = router
