import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../bLove/bMiddleware/bCatchAsyncMiddleware';

import { ContactFormModel } from '../../aModel/admin/dFrontendLanding/cContactFormModel';


const contactPageController = (Label="ContactPage") => ({
  // Create
  create: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await ContactFormModel.create({
        aImage: request.body.aImage,
        aTitle: request.body.aTitle,
        aSubtitle: request.body.aSubtitle,
        aDescription: request.body.aDescription,
        aDetail: request.body.aDetail,
        aStatus: request.body.aStatus === "Active" ? true : false,
        aState: request.body.aState,

        bCreatedAt: request.body.bCreatedAt,
        bCreatedBy: request.body.bCreatedBy,
      })

      // Clear Cache
      await redisClient.del(`${Label.toLowerCase()}-list`)
      
      // Emit Event
      const io = request.app.get("io");
      if (create && io) {
        io.emit(`${Label.toUpperCase()}_LISTED`, create)
        io.emit(`ACTIVITY_LOG_LISTED`, { title: create.aTitle })
      };

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Created Successfully`,
        create: create
      }) 
    }
  ),
})

export default contactPageController;
