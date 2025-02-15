import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import adminAboutCompanyValidation from '../../../cValidation/admin/cAdminLanding/bAdminAboutCompanyValidation';
import adminAboutCompanyController from '../../../bController/admin/cAdminLanding/bAdminAboutCompanyController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("adminaboutcompany-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin About Company", accessPoint: ["List"] }),
  checkCacheMiddleware("adminaboutcompany-list", "AdminAboutCompany", "List"), 
  adminAboutCompanyValidation.list(), validatorMiddleware, 
  adminAboutCompanyController().list
)

router.route("/create").post(
  rateLimiterMiddleware("adminaboutcompany-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin About Company", accessPoint: ["Create"] }),
  adminAboutCompanyValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  adminAboutCompanyController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("adminaboutcompany-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin About Company", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("adminaboutcompany-retrieve", "AdminAboutCompany", "Retrieve"), 
  adminAboutCompanyValidation.retrieve(), validatorMiddleware, 
  adminAboutCompanyController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("adminaboutcompany-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin About Company", accessPoint: ["Update"] }),
  adminAboutCompanyValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  adminAboutCompanyController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("adminaboutcompany-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin About Company", accessPoint: ["Delete"] }),
  adminAboutCompanyValidation.delete(), validatorMiddleware, 
  adminAboutCompanyController().delete
)

export const adminAboutCompanyRouter = router
