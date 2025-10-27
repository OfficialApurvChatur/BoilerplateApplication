import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import adminProjectSectionPageValidation from '../../cValidation/bAdminManagement/iAdminProjectSectionPageValidation';
import adminProjectSectionPageController from '../../bController/bAdminManagement/iAdminProjectSectionPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"AdminProjectSectionPageModel-retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"AdminProjectSectionPageModel-retrieve", label: "AdminProjectSectionPage", name: "Retrieve" }), 
  adminProjectSectionPageValidation.retrieve(), validatorMiddleware, 
  adminProjectSectionPageController().retrieve
)

export const adminProjectSectionPageRoute = router
