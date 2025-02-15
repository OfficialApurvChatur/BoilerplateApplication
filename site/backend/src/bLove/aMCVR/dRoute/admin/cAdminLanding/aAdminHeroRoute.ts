import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import adminHeroValidation from '../../../cValidation/admin/cAdminLanding/aAdminHeroValidation';
import adminHeroController from '../../../bController/admin/cAdminLanding/aAdminHeroController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("adminhero-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Hero", accessPoint: ["List"] }),
  checkCacheMiddleware("adminhero-list", "AdminHero", "List"), 
  adminHeroValidation.list(), validatorMiddleware, 
  adminHeroController().list
)

router.route("/create").post(
  rateLimiterMiddleware("adminhero-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Hero", accessPoint: ["Create"] }),
  adminHeroValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  adminHeroController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("adminhero-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Hero", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("adminhero-retrieve", "AdminHero", "Retrieve"), 
  adminHeroValidation.retrieve(), validatorMiddleware, 
  adminHeroController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("adminhero-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Hero", accessPoint: ["Update"] }),
  adminHeroValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  adminHeroController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("adminhero-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Admin Hero", accessPoint: ["Delete"] }),
  adminHeroValidation.delete(), validatorMiddleware, 
  adminHeroController().delete
)

export const adminHeroRouter = router
