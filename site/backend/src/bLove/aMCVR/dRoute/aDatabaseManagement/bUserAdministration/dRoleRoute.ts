import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import roleValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/dRoleValidation';
import roleContorller from '../../../bController/aDatabaseManagement/bUserAdministration/dRoleController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"RoleModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"RoleModel-list", label: "Role", name: "List" }), 
  roleValidation.list(), validatorMiddleware, 
  roleContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"RoleModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Create"] }),
  roleValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  roleContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"RoleModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"RoleModel-retrieve", label: "Role", name: "Retrieve" }), 
  roleValidation.retrieve(), validatorMiddleware, 
  roleContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"RoleModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Update"] }),
  roleValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  roleContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"RoleModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Delete"] }),
  roleValidation.delete(), validatorMiddleware, 
  roleContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"RoleModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"RoleModel-list-mini", label: "Role", name: "List", customMessage: "RoleModel Listed Successfully (Mini)... From Backend Cache" }), 
  roleValidation.listMini(), validatorMiddleware, 
  roleContorller().listMini
)

export const roleRoute = router
