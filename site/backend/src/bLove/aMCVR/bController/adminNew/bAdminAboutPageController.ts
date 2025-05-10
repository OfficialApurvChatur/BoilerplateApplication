import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { AdminAboutCompanyModel } from '../../aModel/admin/cAdminLanding/bAdminAboutCompanyModel';


const adminAboutPageController = (Label="AdminAboutPage") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Object List
      const object_list = {
        about_list: {
          actually: await AdminAboutCompanyModel.findOne({ aState: "Actually" }).sort({ _id: -1 }),
          comparatively: await AdminAboutCompanyModel.findOne({ aState: "Comparatively" }).sort({ _id: -1 })
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

export default adminAboutPageController;
