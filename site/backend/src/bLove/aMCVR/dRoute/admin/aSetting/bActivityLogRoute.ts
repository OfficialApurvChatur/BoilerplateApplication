import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/dRateLimiterMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/eCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/cValidationMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/fAuthenticationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/jPersonalInfoMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/kAuthorizationMiddleware';

import activityLogValidation from '../../../cValidation/admin/aSetting/bActivityLogValidation';
import activityLogController from '../../../bController/admin/aSetting/bActivityLogController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware("activitylog-list", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Activity Log", accessPoint: ["List"] }),
  checkCacheMiddleware("activitylog-list", "ActivityLog", "List"), 
  activityLogValidation.list(), validatorMiddleware, 
  activityLogController().list
)

router.route("/create").post(
  rateLimiterMiddleware("activitylog-create", 60, 10),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Activity Log", accessPoint: ["Create"] }),
  activityLogValidation.create(), validatorMiddleware,
  personalInfoMiddleware("created"),
  activityLogController().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware("activitylog-retrieve", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Activity Log", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware("activitylog-retrieve", "ActivityLog", "Retrieve"), 
  activityLogValidation.retrieve(), validatorMiddleware, 
  activityLogController().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware("activitylog-update", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Activity Log", accessPoint: ["Update"] }),
  activityLogValidation.update(), validatorMiddleware, 
  personalInfoMiddleware("updated"),
  activityLogController().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware("activitylog-delete", 60, 10), 
  authenticationMiddleware,
  authorizationMiddleware({ menu: "Activity Log", accessPoint: ["Delete"] }),
  activityLogValidation.delete(), validatorMiddleware, 
  activityLogController().delete
)

export const activityLogRouter = router
