import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { HeroModel } from '../../aModel/admin/dFrontendLanding/aHeroModel';
import { AboutCompanyModel } from '../../aModel/admin/dFrontendLanding/bAboutCompanyModel';


const homePageController = (Label="HomePage") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Object List
      const object_list = {
        hero_list: await HeroModel.findOne().select("aImage aTitle bCreatedAt bUpdatedAt").sort({ _id: -1 }),
        about_list: {
          actually: await AboutCompanyModel.findOne({ aState: "Actually" }).sort({ _id: -1 }),
          comparatively: await AboutCompanyModel.findOne({ aState: "Comparatively" }).sort({ _id: -1 })
        }
      }

      // Set Cache
      await redisClient.setex(`${Label.toLowerCase()}-list`, 15*60, JSON.stringify(object_list));

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        list: object_list,
      })
    }
  ),

})

export default homePageController;
