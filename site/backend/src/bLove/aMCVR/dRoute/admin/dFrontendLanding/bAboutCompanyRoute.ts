import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import aboutCompanyValidation from '../../../cValidation/admin/dFrontendLanding/bAboutCompanyValidation';
import aboutCompanyController from '../../../bController/admin/dFrontendLanding/bAboutCompanyController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("aboutcompany-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "About Company", accessPoint: ["List"] }),
  checkCacheMiddleware("aboutcompany-list", "AboutCompany", "List"), 
  aboutCompanyValidation.list(), validatorMiddleware, 
  aboutCompanyController().list
)

router.route("/create").post(
  rateLimiterMiddleware("aboutcompany-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "About Company", accessPoint: ["Create"] }),
  aboutCompanyValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  aboutCompanyController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("aboutcompany-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "About Company", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("aboutcompany-retrieve", "AboutCompany", "Retrieve"), 
  aboutCompanyValidation.retrieve(), validatorMiddleware, 
  aboutCompanyController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("aboutcompany-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "About Company", accessPoint: ["Update"] }),
  aboutCompanyValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  aboutCompanyController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("aboutcompany-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "About Company", accessPoint: ["Delete"] }),
  aboutCompanyValidation.delete(), validatorMiddleware, 
  aboutCompanyController().delete
)

export const aboutCompanyRouter = router
