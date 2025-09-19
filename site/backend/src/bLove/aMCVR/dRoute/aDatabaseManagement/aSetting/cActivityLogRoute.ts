import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import activityLogValidation from '../../../cValidation/aDatabaseManagement/aSetting/cActivityLogValidation';
import activityLogContorller from '../../../bController/aDatabaseManagement/aSetting/cActivityLogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ActivityLogModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ActivityLog", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ActivityLogModel-list", label: "ActivityLog", name: "List" }), 
  activityLogValidation.list(), validatorMiddleware, 
  activityLogContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ActivityLogModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ActivityLog", accessPoint: ["Create"] }),
  activityLogValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  activityLogContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ActivityLogModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ActivityLog", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ActivityLogModel-retrieve", label: "ActivityLog", name: "Retrieve" }), 
  activityLogValidation.retrieve(), validatorMiddleware, 
  activityLogContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ActivityLogModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ActivityLog", accessPoint: ["Update"] }),
  activityLogValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  activityLogContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ActivityLogModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ActivityLog", accessPoint: ["Delete"] }),
  activityLogValidation.delete(), validatorMiddleware, 
  activityLogContorller().delete
)

export const activityLogRoute = router
