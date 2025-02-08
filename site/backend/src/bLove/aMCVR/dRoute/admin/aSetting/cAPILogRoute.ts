import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';

import apiLogValidation from '../../../cValidation/admin/aSetting/cAPILogValidation';
import apiLogController from '../../../bController/admin/aSetting/cAPILogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("apilog-list", 60, 10),
  authenticationMiddleware,
  checkCacheMiddleware("apilog-list", "APILog", "List"), 
  apiLogValidation.list(), validatorMiddleware, 
  apiLogController().list
)

router.route("/create").post(
  rateLimiterMiddleware("apilog-create", 60, 10),
  authenticationMiddleware,
  apiLogValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  apiLogController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("apilog-retrieve", 60, 10), 
  authenticationMiddleware,
  checkCacheMiddleware("apilog-retrieve", "APILog", "Retrieve"), 
  apiLogValidation.retrieve(), validatorMiddleware, 
  apiLogController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("apilog-update", 60, 10), 
  authenticationMiddleware,
  apiLogValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  apiLogController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("apilog-delete", 60, 10), 
  authenticationMiddleware,
  apiLogValidation.delete(), validatorMiddleware, 
  apiLogController().delete
)

export const apiLogRouter = router
