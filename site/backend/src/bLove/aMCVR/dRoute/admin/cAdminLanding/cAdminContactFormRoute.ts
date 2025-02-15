import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import adminContactFormValidation from '../../../cValidation/admin/cAdminLanding/cAdminContactFormValidation';
import adminContactFormController from '../../../bController/admin/cAdminLanding/cAdminContactFormController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("admincontactform-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Contact Form", accessPoint: ["List"] }),
  checkCacheMiddleware("admincontactform-list", "AdminContactForm", "List"), 
  adminContactFormValidation.list(), validatorMiddleware, 
  adminContactFormController().list
)

router.route("/create").post(
  rateLimiterMiddleware("admincontactform-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Contact Form", accessPoint: ["Create"] }),
  adminContactFormValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  adminContactFormController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("admincontactform-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Contact Form", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("admincontactform-retrieve", "AdminContactForm", "Retrieve"), 
  adminContactFormValidation.retrieve(), validatorMiddleware, 
  adminContactFormController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("admincontactform-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Contact Form", accessPoint: ["Update"] }),
  adminContactFormValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  adminContactFormController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("admincontactform-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Contact Form", accessPoint: ["Delete"] }),
  adminContactFormValidation.delete(), validatorMiddleware, 
  adminContactFormController().delete
)

export const adminContactFormRouter = router
