import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import menuValidation from '../../../cValidation/admin/bUserAdministration/bMenuValidation';
import menuController from '../../../bController/admin/bUserAdministration/bMenuController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("menu-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["List"] }),
  checkCacheMiddleware("menu-list", "Menu", "List"), 
  menuValidation.list(), validatorMiddleware, 
  menuController().list
)

router.route("/create").post(
  rateLimiterMiddleware("menu-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Create"] }),
  menuValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  menuController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("menu-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("menu-retrieve", "Menu", "Retrieve"), 
  menuValidation.retrieve(), validatorMiddleware, 
  menuController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("menu-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Update"] }),
  menuValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  menuController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("menu-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Menu", accessPoint: ["Delete"] }),
  menuValidation.delete(), validatorMiddleware, 
  menuController().delete
)

router.route("/list-for-role-create-and-update").get(
  rateLimiterMiddleware("menu-list-for-role-create-and-update", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("menu-list-for-role-create-and-update", "Menu", "List", "Menu For Role Create & Updated Listed Successfully... From Backend Cache"), 
  menuValidation.listForRoleCreateAndUpdate(), validatorMiddleware, 
  menuController().listForRoleCreateAndUpdate
)

export const menuRouter = router
