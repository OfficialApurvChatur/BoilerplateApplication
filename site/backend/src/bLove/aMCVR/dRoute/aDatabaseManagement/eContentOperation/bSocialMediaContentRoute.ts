import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import socialMediaContentValidation from '../../../cValidation/aDatabaseManagement/eContentOperation/bSocialMediaContentValidation';
import socialMediaContentContorller from '../../../bController/aDatabaseManagement/eContentOperation/bSocialMediaContentController';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"SocialMediaContentModel-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SocialMediaContent", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"SocialMediaContentModel-list", label: "SocialMediaContent", name: "List" }), 
  socialMediaContentValidation.list(), validatorMiddleware, 
  socialMediaContentContorller().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"SocialMediaContentModel-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SocialMediaContent", accessPoint: ["Create"] }),
  socialMediaContentValidation.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  socialMediaContentContorller().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"SocialMediaContentModel-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SocialMediaContent", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"SocialMediaContentModel-retrieve", label: "SocialMediaContent", name: "Retrieve" }), 
  socialMediaContentValidation.retrieve(), validatorMiddleware, 
  socialMediaContentContorller().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"SocialMediaContentModel-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SocialMediaContent", accessPoint: ["Update"] }),
  socialMediaContentValidation.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  socialMediaContentContorller().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"SocialMediaContentModel-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "SocialMediaContent", accessPoint: ["Delete"] }),
  socialMediaContentValidation.delete(), validatorMiddleware, 
  socialMediaContentContorller().delete
)

export const socialMediaContentRoute = router
