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


const homePageController = (Model= "HomePageModel", Label= "HomePageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const hero = await HeroModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription dTag dSocialLinks dWebLinks dGalleryImages")
        .lean();

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

      const aboutApplication = await AboutApplicationModel
        .find()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDescription aDetail dTechIcon dWebLinks dGalleryImages")
        .limit(4)
        .lean();

      const contactInfo = await ContactInfoModel
        .findOne()
        .sort({ createdAt: -1 })
        .select("aImage aTitle aSubtitle aDetail")
        .lean();

      const service = await ServiceModel
        .find()
        .sort({ createdAt: -1 })
        .limit(4)
        .select("aImage aTitle aSubtitle aDescription dLinks dIcon")
        .lean();

      const counter = await CounterModel
        .find()
        .sort({ createdAt: -1 })
        .limit(3)
        .select("aImage aTitle aSubtitle aDescription")
        .lean();

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

      const projectSection = await ProjectSectionModel
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
        key: cacheVariable.homePageModel.retrieve({ 
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

export default homePageController;
