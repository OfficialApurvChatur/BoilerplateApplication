import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import roleValidation from '../../../cValidation/admin/bUserAdministration/cRoleValidation';
import roleController from '../../../bController/admin/bUserAdministration/cRoleController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("role-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["List"] }),
  checkCacheMiddleware("role-list", "Role", "List"), 
  roleValidation.list(), validatorMiddleware, 
  roleController().list
)

router.route("/create").post(
  rateLimiterMiddleware("role-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Create"] }),
  roleValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  roleController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("role-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("role-retrieve", "Role", "Retrieve"), 
  roleValidation.retrieve(), validatorMiddleware, 
  roleController().retrieve
)

router.route("/update-retrieve/:id").get(
  rateLimiterMiddleware("role-update-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("role-update-retrieve", "Role", "Retrieve", "Role Update Retrieved Successfully... From Backend Cache"), 
  roleValidation.updateRetrieve(), validatorMiddleware, 
  roleController().updateRetrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("role-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Update"] }),
  roleValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  roleController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("role-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Role", accessPoint: ["Delete"] }),
  roleValidation.delete(), validatorMiddleware, 
  roleController().delete
)

router.route("/list-for-user-create-and-update").get(
  rateLimiterMiddleware("role-list-for-user-create-and-update", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("role-list-for-user-create-and-update", "Role", "List", "Role For User Create & Updated Listed Successfully... From Backend Cache"), 
  roleValidation.listForUserCreateAndUpdate(), validatorMiddleware, 
  roleController().listForUserCreateAndUpdate
)

router.route("/list-for-user-auth-sign-up").get(
  rateLimiterMiddleware("role-list-for-user-auth-sign-up", 60, 10),
  checkCacheMiddleware("role-list-for-user-auth-sign-up", "Role", "List", "Role For User Auth Sign Up Listed Successfully... From Backend Cache"), 
  roleValidation.listForUserAuthSignUp(), validatorMiddleware, 
  roleController().listForUserAuthSignUp
)

export const roleRouter = router
