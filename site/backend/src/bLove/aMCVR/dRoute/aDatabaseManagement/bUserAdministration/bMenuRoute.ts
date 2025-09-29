import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import menuValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/bMenuValidation';
import menuContorller from '../../../bController/aDatabaseManagement/bUserAdministration/bMenuController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"MenuModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"MenuModel-list", label: "Menu", name: "List" }), 
  menuValidation.list(), validatorMiddleware, 
  menuContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"MenuModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Create"] }),
  menuValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  menuContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"MenuModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"MenuModel-retrieve", label: "Menu", name: "Retrieve" }), 
  menuValidation.retrieve(), validatorMiddleware, 
  menuContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"MenuModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Update"] }),
  menuValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  menuContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"MenuModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Delete"] }),
  menuValidation.delete(), validatorMiddleware, 
  menuContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"MenuModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"MenuModel-list-mini", label: "Menu", name: "List", customMessage: "MenuModel Listed Successfully (Mini)... From Backend Cache" }), 
  menuValidation.listMini(), validatorMiddleware, 
  menuContorller().listMini
)

export const menuRoute = router
