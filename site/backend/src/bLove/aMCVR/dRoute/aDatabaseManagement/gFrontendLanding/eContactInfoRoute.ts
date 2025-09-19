import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import contactInfoValidation from '../../../cValidation/aDatabaseManagement/gFrontendLanding/eContactInfoValidation';
import contactInfoContorller from '../../../bController/aDatabaseManagement/gFrontendLanding/eContactInfoController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"ContactInfoModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactInfo", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"ContactInfoModel-list", label: "ContactInfo", name: "List" }), 
  contactInfoValidation.list(), validatorMiddleware, 
  contactInfoContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"ContactInfoModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactInfo", accessPoint: ["Create"] }),
  contactInfoValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  contactInfoContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"ContactInfoModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactInfo", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"ContactInfoModel-retrieve", label: "ContactInfo", name: "Retrieve" }), 
  contactInfoValidation.retrieve(), validatorMiddleware, 
  contactInfoContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"ContactInfoModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactInfo", accessPoint: ["Update"] }),
  contactInfoValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  contactInfoContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"ContactInfoModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "ContactInfo", accessPoint: ["Delete"] }),
  contactInfoValidation.delete(), validatorMiddleware, 
  contactInfoContorller().delete
)

export const contactInfoRoute = router
