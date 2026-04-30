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


const servicePageController = (Model= "ServicePageModel", Label= "ServicePageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const service = await ServiceModel
        .find()
        .sort({ bCreatedAt: -1 })
        .limit(4)
        .select("aImage aTitle aSubtitle aDescription dLinks dIcon")
        .lean();

      const counter = await CounterModel
        .find()
        .sort({ bCreatedAt: -1 })
        .limit(3)
        .select("aImage aTitle aSubtitle aDescription")
        .lean();

      const responseData = {
        service,
        counter,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.servicePageModel.retrieve({ 
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

export default servicePageController;
