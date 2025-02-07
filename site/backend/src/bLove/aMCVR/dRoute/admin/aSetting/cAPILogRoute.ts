import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import apiLogValidation from '../../../cValidation/admin/aSetting/cAPILogValidation';
import apiLogController from '../../../bController/admin/aSetting/cAPILogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("apilog-list", 60, 10),
  checkCacheMiddleware("apilog-list", "APILog", "List"), 
  apiLogValidation.list(), validatorMiddleware, 
  apiLogController().list
)

router.route("/create").post(
  rateLimiterMiddleware("apilog-create", 60, 10),
  apiLogValidation.create(), validatorMiddleware,
  apiLogController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("apilog-retrieve", 60, 10), 
  checkCacheMiddleware("apilog-retrieve", "APILog", "Retrieve"), 
  apiLogValidation.retrieve(), validatorMiddleware, 
  apiLogController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("apilog-update", 60, 10), 
  apiLogValidation.update(), validatorMiddleware, 
  apiLogController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("apilog-delete", 60, 10), 
  apiLogValidation.delete(), validatorMiddleware, 
  apiLogController().delete
)

export const apiLogRouter = router
