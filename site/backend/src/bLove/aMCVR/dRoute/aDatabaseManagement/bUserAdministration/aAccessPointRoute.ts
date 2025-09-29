import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import accessPointValidation from '../../../cValidation/aDatabaseManagement/bUserAdministration/aAccessPointValidation';
import accessPointContorller from '../../../bController/aDatabaseManagement/bUserAdministration/aAccessPointController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"AccessPointModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AccessPoint", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"AccessPointModel-list", label: "AccessPoint", name: "List" }), 
  accessPointValidation.list(), validatorMiddleware, 
  accessPointContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"AccessPointModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AccessPoint", accessPoint: ["Create"] }),
  accessPointValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  accessPointContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"AccessPointModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AccessPoint", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"AccessPointModel-retrieve", label: "AccessPoint", name: "Retrieve" }), 
  accessPointValidation.retrieve(), validatorMiddleware, 
  accessPointContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"AccessPointModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AccessPoint", accessPoint: ["Update"] }),
  accessPointValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  accessPointContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"AccessPointModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "AccessPoint", accessPoint: ["Delete"] }),
  accessPointValidation.delete(), validatorMiddleware, 
  accessPointContorller().delete
)

router.route("/list-mini").get(
  rateLimiterMiddleware({ key:"AccessPointModel-list-mini", time: 60, limit: 10 }),
  authenticationMiddleware,
  checkCacheMiddleware({ key:"AccessPointModel-list-mini", label: "AccessPoint", name: "List", customMessage: "AccessPointModel Listed Successfully (Mini)... From Backend Cache" }), 
  accessPointValidation.listMini(), validatorMiddleware, 
  accessPointContorller().listMini
)

export const accessPointRoute = router
