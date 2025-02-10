import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import profileValidation from '../../../cValidation/admin/bUserAdministration/eProfileValidation';
import profileController from '../../../bController/admin/bUserAdministration/eProfileController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("profile-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["List"] }),
  checkCacheMiddleware("profile-list", "Profile", "List"), 
  profileValidation.list(), validatorMiddleware, 
  profileController().list
)

router.route("/create").post(
  rateLimiterMiddleware("profile-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Create"] }),
  profileValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  profileController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("profile-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("profile-retrieve", "Profile", "Retrieve"), 
  profileValidation.retrieve(), validatorMiddleware, 
  profileController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("profile-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Update"] }),
  profileValidation.update(), validatorMiddleware,
  personalInfoMiddleware("updated"), 
  profileController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("profile-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Profile", accessPoint: ["Delete"] }),
  profileValidation.delete(), validatorMiddleware, 
  profileController().delete
)

router.route("/list-for-user-create-and-update").get(
  rateLimiterMiddleware("profile-list-for-user-create-and-update", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("profile-list-for-user-create-and-update", "Profile", "List", "Profile For User Create & Updated Listed Successfully... From Backend Cache"), 
  profileValidation.listForUserCreateAndUpdate(), validatorMiddleware, 
  profileController().listForUserCreateAndUpdate
)

export const profileRouter = router
