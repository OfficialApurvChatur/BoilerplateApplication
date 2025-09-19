import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import heroValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/aHeroValidation';
import heroContorller from '../../../bController/aDatabaseManagement/gFrontendLanding/aHeroController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"HeroModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"HeroModel-list", label: "Hero", name: "List" }), 
  heroValidation.list(), validatorMiddleware, 
  heroContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"HeroModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Create"] }),
  heroValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  heroContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"HeroModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"HeroModel-retrieve", label: "Hero", name: "Retrieve" }), 
  heroValidation.retrieve(), validatorMiddleware, 
  heroContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"HeroModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Update"] }),
  heroValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  heroContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"HeroModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Hero", accessPoint: ["Delete"] }),
  heroValidation.delete(), validatorMiddleware, 
  heroContorller().delete
)

export const heroRoute = router
