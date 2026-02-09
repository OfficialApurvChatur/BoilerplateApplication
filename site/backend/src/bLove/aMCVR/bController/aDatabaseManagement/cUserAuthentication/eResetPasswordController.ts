import express from 'express';
import crypto from 'crypto';

import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
import cacheCreateMiddleware from '../../../../../bLove/bMiddleware/kCacheCreateMiddleware';
import cacheDeleteMiddleware from '../../../../../bLove/bMiddleware/lCacheDeleteMiddleware';
import deleteImageMiddleware from '../../../../../bLove/bMiddleware/pDeleteImageMiddleware';
import eventCreateMiddleware from '../../../../../bLove/bMiddleware/mEventCreateMiddleware';
import emailToCompanyMiddleware from '../../../../../bLove/bMiddleware/nEmailToCompanyMiddleware';
import emailToUserMiddleware from '../../../../../bLove/bMiddleware/oEmailToUserMiddleware';
import cacheVariable from '../../../../../bLove/eVariable/aCacheVariable';
import eventVariable from '../../../../../bLove/eVariable/bEventVariable';
import emailToCompanyVariable from '../../../../../bLove/eVariable/cEmailToCompanyVariable';
import emailToUserVariable from '../../../../../bLove/eVariable/dEmailToUserVariable';
import generateCookieUtility from '../../../../cUtility/fGenerateCookieUtility';
import ErrorUtility from "../../../../cUtility/aErrorUtility";

import { ResetPasswordModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/eResetPasswordModel';
import { UserModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel';


const resetPasswordController = (Model=ResetPasswordModel, Label="ResetPasswordModel", ExtraModel=UserModel, ExtraLabel="UserModel") => ({
  // List Controller
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aImage aTitle bCreatedAt bUpdatedAt")
        .populate("bCreatedBy", "eImage eFirstname eLastname eEmail")
        .populate("bUpdatedBy", "eImage eFirstname eLastname eEmail");

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.resetPasswordModel.list({ 
          Label
        }), 
        data: list 
      });

      // Retrieve Total Documents
      const total = await Model.countDocuments();

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        total: total,
        list: list,
      })
    }
  ),

  // Create Controller
  create: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const create = await Model.create({
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

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.resetPasswordModel.create({ 
          Label  
        }), 
      });

      // Create Event
      eventCreateMiddleware({
        Label,
        data: create,
        eventList: eventVariable.resetPasswordModel.create({
          Label, 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: create,
        textMessage: emailToCompanyVariable.resetPasswordModel.create({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: create,
        textMessage: emailToUserVariable.resetPasswordModel.create({
          Label, 
          request 
        }),
        request
      });

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Created Successfully`,
        create: create
      }) 
    }
  ),

  // Retrieve Controller
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await Model.findById(request.params.id)
        .populate("bCreatedBy", "eImage eFirstname eLastname eEmail")
        .populate("bUpdatedBy", "eImage eFirstname eLastname eEmail");

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.resetPasswordModel.retrieve({ 
          Label, 
          request 
        }), 
        data: retrieve 
      });

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: retrieve
      })
    }
  ),

  // Update Controller
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await Model.findByIdAndUpdate(
        request.params.id, {
          aImage: request.body.aImage,
          aTitle: request.body.aTitle,
          aSubtitle: request.body.aSubtitle,
          aDescription: request.body.aDescription,
          aDetail: request.body.aDetail,
          aStatus: request.body.aStatus === "Active" ? true : false,
          aState: request.body.aState,
  
          bUpdatedAt: request.body.bUpdatedAt,
          bUpdatedBy: request.body.bUpdatedBy,  
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.resetPasswordModel.update({ 
          Label, 
          request 
        }), 
      });

      // Create Event
      eventCreateMiddleware({
        Label,
        data: update,
        eventList: eventVariable.resetPasswordModel.update({
          Label, 
          request 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: update,
        textMessage: emailToCompanyVariable.resetPasswordModel.update({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: update,
        textMessage: emailToUserVariable.resetPasswordModel.update({
          Label, 
          request 
        }),
        request
      });

      // Response
      response.status(201).json({
        success: true,
        message: `${Label} Updated Successfully`,
        update: update
      })
    }
  ),

  // Delete Controller
  delete: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      
      // Delete
      const delete_object = await Model.findOneAndDelete({ _id: request.params.id })

      // Delete Image
      deleteImageMiddleware({
        Label,
        data: delete_object
      })
      
      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.resetPasswordModel.delete({ 
          Label, 
          request 
        }), 
      });
      
      // Create Event
      eventCreateMiddleware({
        Label,
        data: delete_object,
        eventList: eventVariable.resetPasswordModel.delete({
          Label, 
          request 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToCompanyVariable.resetPasswordModel.delete({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToUserVariable.resetPasswordModel.delete({
          Label, 
          request 
        }),
        request
      });
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ), 
  
  // Reset Password Controller
  resetPassword: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Hash Token
			const resetPasswordToken = crypto
        .createHash("sha256")
        .update((request.params as any).token)
        .digest("hex");

      // Retrieve
      const retrieve = await ExtraModel.findOne({
        eResetPasswordToken: resetPasswordToken, 
        eResetPasswordTokenExpire: { $gt: Date.now() }
      });

			// Not Found
			if (!retrieve) return next(new ErrorUtility("Reset password link is invalid or has been expired", 400));

      // Save
      if (retrieve) {
        retrieve.ePassword = request.body.ePassword;
        retrieve.eResetPasswordToken = undefined as unknown as string;
        retrieve.eResetPasswordTokenExpire = undefined as unknown as Date;        
        await retrieve.save({ validateBeforeSave: false });
      }

      // Response
			generateCookieUtility(201, `Password Recovered Successfully`, `user_reset_password`, retrieve, response)    
    }
  ),
})

export default resetPasswordController;
