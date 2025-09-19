import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import contactFormValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/dContactFormValidation';
import contactFormContorller from '../../../bController/aDatabaseManagement/gFrontendLanding/dContactFormController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ContactFormModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactForm", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ContactFormModel-list", label: "ContactForm", name: "List" }), 
  contactFormValidation.list(), validatorMiddleware, 
  contactFormContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ContactFormModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactForm", accessPoint: ["Create"] }),
  contactFormValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  contactFormContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ContactFormModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactForm", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ContactFormModel-retrieve", label: "ContactForm", name: "Retrieve" }), 
  contactFormValidation.retrieve(), validatorMiddleware, 
  contactFormContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ContactFormModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactForm", accessPoint: ["Update"] }),
  contactFormValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  contactFormContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ContactFormModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactForm", accessPoint: ["Delete"] }),
  contactFormValidation.delete(), validatorMiddleware, 
  contactFormContorller().delete
)

export const contactFormRoute = router
