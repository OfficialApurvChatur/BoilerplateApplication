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


const projectSectionPageController = (Model= "ProjectSectionPageModel", Label= "ProjectSectionPageModel") => ({
  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const projectSection = await ProjectSectionModel
        .findOne()
        .sort({ bCreatedAt: -1 })
        .select("aTitle aSubtitle aDescription")
        .populate({
          path: "cProjectGroups",
          select: "aTitle aSubtitle aDescription cProjects",
          populate: {
            path: "cProjects",
            select: "aImage aTitle aSubtitle aDescription dSocialLinks dWebLinks",
            populate: [
              {
                path: "bCreatedBy",
                select: "eImage eFirstname eLastname eEmail"
              },
              {
                path: "bUpdatedBy",
                select: "eImage eFirstname eLastname eEmail"
              }
            ]
          }
        })
        .populate({
          path: "cProjects",
          select: "aImage aTitle aSubtitle aDescription dSocialLinks dWebLinks",
          populate: [
            {
              path: "bCreatedBy",
              select: "eImage eFirstname eLastname eEmail"
            },
            {
              path: "bUpdatedBy",
              select: "eImage eFirstname eLastname eEmail"
            }
          ]
        })        
        .lean();

      const responseData = {
        projectSection,
      };

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.projectSectionPageModel.retrieve({ 
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

export default projectSectionPageController;
