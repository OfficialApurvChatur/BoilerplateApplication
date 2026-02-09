import express from 'express';

import catchAsyncMiddleware from '../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import cacheCreateMiddleware from '../../../../bLove/bMiddleware/kCacheCreateMiddleware';
import cacheVariable from '../../../../bLove/eVariable/aCacheVariable';

import { HeroModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/aHeroModel';
import { AboutCompanyModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/bAboutCompanyModel';
import { AboutApplicationModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/cAboutApplicationModel';
import { ContactInfoModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/eContactInfoModel';
import { ServiceModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/gServiceModel';
import { CounterModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/fCounterModel';
import { BranchSectionModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/hBranchSectionModel';
import { ProjectSectionModel } from '../../aModel/aDatabaseManagement/gFrontendLanding/kProjectSectionModel';


const branchGroupPageController = (Model= "BranchGroupPageModel", Label= "BranchGroupPageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const branchSection = await BranchSectionModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aTitle aSubtitle aDescription")
        .populate({
          path: "cBranchGroups",
          select: "aTitle aSubtitle aDescription cBranches",
          populate: {
            path: "cBranches",
            select: "aImage aTitle aSubtitle aDescription dSocialLinks dWebLinks"
          }
        })        
        .lean();

      const responseData = {
        branchSection,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.branchGroupPageModel.retrieve({ 
          Label, 
          request 
        }), 
        data: responseData 
      });

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: responseData
      })
    }
  ),
})

export default branchGroupPageController;
