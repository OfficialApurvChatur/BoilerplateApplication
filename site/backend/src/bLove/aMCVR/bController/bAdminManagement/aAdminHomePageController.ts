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


const adminHomePageController = (Model= "AdminHomePageModel", Label= "AdminHomePageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const hero = await AdminHeroModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription dTag dSocialLinks dWebLinks dGalleryImages")
        .lean();

      const aboutCompanyTruly = await AdminAboutCompanyModel
        .findOne({ dTag: "truly" })
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription aDetail dTag")
        .lean();

      const aboutCompanyRelatively = await AdminAboutCompanyModel
        .findOne({ dTag: "relatively" })
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription aDetail dTag")
        .lean();

      const aboutApplication = await AdminAboutApplicationModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription dTechIcon")
        .lean();

      const contactInfo = await AdminContactInfoModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDetail")
        .lean();

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

      const branchSection = await AdminBranchSectionModel
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
        hero,
        aboutCompany: {
          truly: aboutCompanyTruly,
          relatively: aboutCompanyRelatively,
        },
        aboutApplication,
        contactInfo,
        service,
        counter,
        projectSection,
        branchSection,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.adminHomePageModel.retrieve({ 
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

export default adminHomePageController;
