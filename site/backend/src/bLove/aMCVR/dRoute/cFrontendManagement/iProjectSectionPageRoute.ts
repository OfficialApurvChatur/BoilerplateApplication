import express from 'express';

import rateLimiterMiddleware from '../../../bMiddleware/cRateLimiterMiddleware';
import checkCacheMiddleware from '../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../bMiddleware/gValidationMiddleware';

import projectSectionPageValidation from '../../cValidation/cFrontendManagement/iProjectSectionPageValidation';
import projectSectionPageController from '../../bController/cFrontendManagement/iProjectSectionPageController';


const router = express.Router();

router.route("/retrieve").get(
  rateLimiterMiddleware({ key:"ProjectSectionPageModel::retrieve", time: 60, limit: 10 }),
  checkCacheMiddleware({ key:"ProjectSectionPageModel::retrieve", label: "ProjectSectionPage", name: "Retrieve", skip: true }), 
  projectSectionPageValidation.retrieve(), validatorMiddleware, 
  projectSectionPageController().retrieve
)

export const projectSectionPageRoute = router
