import express from 'express';

import { redisClient } from '../../../../../aConnection/dRedisConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import ErrorUtility from '../../../../../bLove/cUtility/aErrorUtility';
import generateCookieUtility from '../../../../../bLove/cUtility/cGenerateCookieUtility';

import { UserModel } from '../../../aModel/admin/bUserAdministration/dUserModel';
import { ProfileModel } from '../../../aModel/admin/bUserAdministration/eProfileModel';


const userAccountController = (Model=UserModel, Label="User") => ({
  // Retrieve
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findOne({_id: (request as any).user})
        .populate({
          path: 'cRole',
          select: "aTitle cMenu",
          populate: {
            path: 'cMenu.menu',
            select: "aTitle cAccessPoint",
            populate: {
              path: 'cAccessPoint',
              select: 'aTitle',
            },  
          }
        });

      // Not Found
      if (!retrieve) next(new ErrorUtility(`${Label} Not Found`, 404))

      // Response
      response.status(200).json({ 
        success: true,
        message: `${Label} Account Retrieved Successfully`,
        user_account_retrieve: retrieve
      })
    }
  ),

  // Update
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await Model.findByIdAndUpdate(
        (request as any).user,{
          aImage: request.body.aImage,
          aTitle: request.body.aTitle,
          aSubtitle: request.body.aSubtitle,
          aDescription: request.body.aDescription,
          aDetail: request.body.aDetail,
          aStatus: request.body.aStatus === "Active" ? true : false,
          aState: request.body.aState,

          // cRole: request.body.cRole,
          // cProfile: request.body.cProfile,

          eImage: request.body.eImage,
          eFirstname: request.body.eFirstname,
          eLastname: request.body.eLastname,
          // eEmail: request.body.eEmail,
          eMobile: request.body.eMobile,
          // ePassword: request.body.ePassword,  
        }, {
          new: true,
          runValidators: true,
          useFindAndModify: false
        }
      )

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Account Updated Successfully`,
        update: update
      })
    }
  ),
  
  // Email Update
  emailUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await Model.findByIdAndUpdate(
        (request as any).user,{
          eEmail: request.body.eEmail,
        }, {
          new: true,
          runValidators: true,
          useFindAndModify: false
        }
      )

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Account Email Updated Successfully`,
        update: update
      })
    }
  ),
    
  // Password Update
  passwordUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await UserModel.findById((request as any).user).select("+ePassword");

      // Save
      (retrieve as any).ePassword = request.body.eNewPassword;
      await (retrieve as any).save();

      // Response
      generateCookieUtility(201, `${Label} Account Password Updated Successfully...`, `user_update`, retrieve, response)
    }
  ),
    
})

export default userAccountController;
