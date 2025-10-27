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


const adminProjectGroupPageController = (Model= "AdminProjectGroupPageModel", Label= "AdminProjectGroupPageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const projectSection = await AdminProjectSectionModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aTitle aSubtitle aDescription")
        .populate({
          path: "cProjectGroups",
          select: "aTitle aSubtitle aDescription cProjects",
          populate: {
            path: "cProjects",
            select: "aImage aTitle aSubtitle aDescription dSocialLinks dWebLinks"
          }
        })
        .lean();

      const responseData = {
        projectSection,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.adminProjectGroupPageModel.retrieve({ 
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

export default adminProjectGroupPageController;
