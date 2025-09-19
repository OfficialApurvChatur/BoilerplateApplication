import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import adminHeroValidation from '../../../cValidation/aDatabaseManagement/fAdminLanding/aAdminHeroValidation';
import adminHeroContorller from '../../../bController/aDatabaseManagement/fAdminLanding/aAdminHeroController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AdminHeroModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminHero", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AdminHeroModel-list", label: "AdminHero", name: "List" }), 
  adminHeroValidation.list(), validatorMiddleware, 
  adminHeroContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AdminHeroModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminHero", accessPoint: ["Create"] }),
  adminHeroValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  adminHeroContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AdminHeroModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminHero", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AdminHeroModel-retrieve", label: "AdminHero", name: "Retrieve" }), 
  adminHeroValidation.retrieve(), validatorMiddleware, 
  adminHeroContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AdminHeroModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminHero", accessPoint: ["Update"] }),
  adminHeroValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  adminHeroContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AdminHeroModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AdminHero", accessPoint: ["Delete"] }),
  adminHeroValidation.delete(), validatorMiddleware, 
  adminHeroContorller().delete
)

export const adminHeroRoute = router
