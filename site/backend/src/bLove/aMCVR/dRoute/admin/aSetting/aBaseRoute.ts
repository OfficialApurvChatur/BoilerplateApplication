import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';

import baseValidation from '../../../cValidation/admin/aSetting/aBaseValidation';
import baseController from '../../../bController/admin/aSetting/aBaseController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("base-list", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("base-list", "Base", "List"), 
  baseValidation.list(), validatorMiddleware, 
  baseController().list
)

router.route("/create").post(
  rateLimiterMiddleware("base-create", 60, 10),
  authenticationMiddleware,
  baseValidation.create(), validatorMiddleware,
  baseController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("base-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("base-retrieve", "Base", "Retrieve"), 
  baseValidation.retrieve(), validatorMiddleware, 
  baseController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("base-update", 60, 10), 
  authenticationMiddleware,
  baseValidation.update(), validatorMiddleware, 
  baseController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("base-delete", 60, 10), 
  authenticationMiddleware,
  baseValidation.delete(), validatorMiddleware, 
  baseController().delete
)

export const baseRouter = router
