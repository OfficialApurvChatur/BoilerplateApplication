import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import heroValidation from '../../../cValidation/admin/dFrontendLanding/aHeroValidation';
import heroController from '../../../bController/admin/dFrontendLanding/aHeroController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("hero-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["List"] }),
  checkCacheMiddleware("hero-list", "Hero", "List"), 
  heroValidation.list(), validatorMiddleware, 
  heroController().list
)

router.route("/create").post(
  rateLimiterMiddleware("hero-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Create"] }),
  heroValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  heroController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("hero-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("hero-retrieve", "Hero", "Retrieve"), 
  heroValidation.retrieve(), validatorMiddleware, 
  heroController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("hero-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Update"] }),
  heroValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  heroController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("hero-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Delete"] }),
  heroValidation.delete(), validatorMiddleware, 
  heroController().delete
)

export const heroRouter = router
