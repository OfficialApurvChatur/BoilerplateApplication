import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminAboutCompanyPageValidation from '../../cValidation/bAdminManagement/bAdminAboutCompanyPageValidation';
import adminAboutCompanyPageController from '../../bController/bAdminManagement/bAdminAboutCompanyPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminAboutCompanyPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminAboutCompanyPageModel-retrieve", label: "AdminAboutCompanyPage", name: "Retrieve" }), 
  adminAboutCompanyPageValidation.retrieve(), validatorMiddleware, 
  adminAboutCompanyPageController().retrieve
)

export const adminAboutCompanyPageRoute = router
