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


const aboutCompanyPageController = (Model= "AboutCompanyPageModel", Label= "AboutCompanyPageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const aboutCompanyTruly = await AboutCompanyModel
        .findOne({ dTag: "truly" })
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription aDetail dTag")
        .lean();

      const aboutCompanyRelatively = await AboutCompanyModel
        .findOne({ dTag: "relatively" })
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription aDetail dTag")
        .lean();

      const responseData = {
        aboutCompany: {
          truly: aboutCompanyTruly,
          relatively: aboutCompanyRelatively,
        },
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.aboutCompanyPageModel.retrieve({ 
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

export default aboutCompanyPageController;
