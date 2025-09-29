import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import profileValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/fProfileValidation';
import profileContorller from '../../../bController/aDatabaseManagement/bUserAdministration/fProfileController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ProfileModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ProfileModel-list", label: "Profile", name: "List" }), 
  profileValidation.list(), validatorMiddleware, 
  profileContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ProfileModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Create"] }),
  profileValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  profileContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ProfileModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ProfileModel-retrieve", label: "Profile", name: "Retrieve" }), 
  profileValidation.retrieve(), validatorMiddleware, 
  profileContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ProfileModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Update"] }),
  profileValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  profileContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ProfileModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Delete"] }),
  profileValidation.delete(), validatorMiddleware, 
  profileContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"ProfileModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"ProfileModel-list-mini", label: "Profile", name: "List", customMessage: "ProfileModel Listed Successfully (Mini)... From Backend Cache" }), 
  profileValidation.listMini(), validatorMiddleware, 
  profileContorller().listMini
)

export const profileRoute = router
