import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';

import policyValidation from '../../../cValidation/admin/cMain/aPolicyValidation';
import policyController from '../../../bController/admin/cMain/aPolicyController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("policy-list", 60, 10),
  checkCacheMiddleware("policy-list", "Policy", "List"), 
  policyValidation.list(), validatorMiddleware, 
  policyController().list
)

router.route("/create").post(
  rateLimiterMiddleware("policy-create", 60, 10),
  policyValidation.create(), validatorMiddleware,
  policyController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("policy-retrieve", 60, 10), 
  checkCacheMiddleware("policy-retrieve", "Policy", "Retrieve"), 
  policyValidation.retrieve(), validatorMiddleware, 
  policyController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("policy-update", 60, 10), 
  policyValidation.update(), validatorMiddleware, 
  policyController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("policy-delete", 60, 10), 
  policyValidation.delete(), validatorMiddleware, 
  policyController().delete
)

export const policyRouter = router
