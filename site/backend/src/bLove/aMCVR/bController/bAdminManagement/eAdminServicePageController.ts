import express from 'express';

import catchAsyncMiddleware from '../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import cacheCreateMiddleware from '../../../../bLove/bMiddleware/kCacheCreateMiddleware';
import cacheVariable from '../../../../bLove/eVariable/aCacheVariable';

import { AdminHeroModel } from '../../aModel/aDatabaseManagement/fAdminLanding/aAdminHeroModel';
import { AdminAboutCompanyModel } from '../../aModel/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyModel';
import { AdminAboutApplicationModel } from '../../aModel/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationModel';
import { AdminContactInfoModel } from '../../aModel/aDatabaseManagement/fAdminLanding/eAdminContactInfoModel';
import { AdminServiceModel } from '../../aModel/aDatabaseManagement/fAdminLanding/gAdminServiceModel';
import { AdminCounterModel } from '../../aModel/aDatabaseManagement/fAdminLanding/fAdminCounterModel';
import { AdminBranchSectionModel } from '../../aModel/aDatabaseManagement/fAdminLanding/hAdminBranchSectionModel';
import { AdminProjectSectionModel } from '../../aModel/aDatabaseManagement/fAdminLanding/kAdminProjectSectionModel';


const adminServicePageController = (Model= "AdminServicePageModel", Label= "AdminServicePageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const service = await AdminServiceModel
        .find()
        .sort({ createdAt: -1 })
        .limit(4)
        .select("aImage aTitle aSubtitle aDescription dLinks dIcon")
        .lean();

      const counter = await AdminCounterModel
        .find()
        .sort({ createdAt: -1 })
        .limit(3)
        .select("aImage aTitle aSubtitle aDescription")
        .lean();

      const responseData = {
        service,
        counter,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.adminServicePageModel.retrieve({ 
          Label, 
          request 
        }), 
        data: responseData 
      })(request, response, next);

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: responseData
      })
    }
  ),
})

export default adminServicePageController;
