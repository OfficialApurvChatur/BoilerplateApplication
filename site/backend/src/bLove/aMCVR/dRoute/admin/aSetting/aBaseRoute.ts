import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import baseValidation from '../../../cValidation/admin/aSetting/aBaseValidation';
import baseController from '../../../bController/admin/aSetting/aBaseController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("base-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["List"] }),
  checkCacheMiddleware("base-list", "Base", "List"), 
  baseValidation.list(), validatorMiddleware, 
  baseController().list
)

router.route("/create").post(
  rateLimiterMiddleware("base-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Create"] }),
  baseValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  baseController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("base-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("base-retrieve", "Base", "Retrieve"), 
  baseValidation.retrieve(), validatorMiddleware, 
  baseController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("base-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Update"] }),
  baseValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  baseController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("base-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Base", accessPoint: ["Delete"] }),
  baseValidation.delete(), validatorMiddleware, 
  baseController().delete
)

export const baseRouter = router
