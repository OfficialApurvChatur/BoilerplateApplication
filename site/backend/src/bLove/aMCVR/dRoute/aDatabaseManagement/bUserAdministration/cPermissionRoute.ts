import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import permissionValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/cPermissionValidation';
import permissionContorller from '../../../bController/aDatabaseManagement/bUserAdministration/cPermissionController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"PermissionModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Permission", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"PermissionModel-list", label: "Permission", name: "List" }), 
  permissionValidation.list(), validatorMiddleware, 
  permissionContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"PermissionModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Permission", accessPoint: ["Create"] }),
  permissionValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  permissionContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"PermissionModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Permission", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"PermissionModel-retrieve", label: "Permission", name: "Retrieve" }), 
  permissionValidation.retrieve(), validatorMiddleware, 
  permissionContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"PermissionModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Permission", accessPoint: ["Update"] }),
  permissionValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  permissionContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"PermissionModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Permission", accessPoint: ["Delete"] }),
  permissionValidation.delete(), validatorMiddleware, 
  permissionContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"PermissionModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"PermissionModel-list-mini", label: "Permission", name: "List", customMessage: "PermissionModel Listed Successfully (Mini)... From Backend Cache" }), 
  permissionValidation.listMini(), validatorMiddleware, 
  permissionContorller().listMini
)

export const permissionRoute = router
