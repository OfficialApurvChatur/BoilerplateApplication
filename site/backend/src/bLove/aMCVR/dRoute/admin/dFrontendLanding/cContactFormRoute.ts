import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import contactFormValidation from '../../../cValidation/admin/dFrontendLanding/cContactFormValidation';
import contactFormController from '../../../bController/admin/dFrontendLanding/cContactFormController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("contactform-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Contact Form", accessPoint: ["List"] }),
  checkCacheMiddleware("contactform-list", "ContactForm", "List"), 
  contactFormValidation.list(), validatorMiddleware, 
  contactFormController().list
)

router.route("/create").post(
  rateLimiterMiddleware("contactform-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Contact Form", accessPoint: ["Create"] }),
  contactFormValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  contactFormController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("contactform-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Contact Form", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("contactform-retrieve", "ContactForm", "Retrieve"), 
  contactFormValidation.retrieve(), validatorMiddleware, 
  contactFormController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("contactform-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Contact Form", accessPoint: ["Update"] }),
  contactFormValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  contactFormController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("contactform-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Contact Form", accessPoint: ["Delete"] }),
  contactFormValidation.delete(), validatorMiddleware, 
  contactFormController().delete
)

export const contactFormRouter = router
