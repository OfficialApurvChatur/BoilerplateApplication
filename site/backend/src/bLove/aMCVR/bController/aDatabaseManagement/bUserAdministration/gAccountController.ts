import express from 'express';

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
import ErrorUtility from '../../../../cUtility/aErrorUtility';
import generateCookieUtility from '../../../../cUtility/fGenerateCookieUtility';

import { AccountModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/gAccountModel';
import { UserModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel';


const accountController = (Model=AccountModel, Label="AccountModel", ExtraModel=UserModel, ExtraLabel="UserModel") => ({
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
        key: cacheVariable.accountModel.list({ 
          Label
        }), 
        data: list 
      })(request, response, next);

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
        keyList: cacheVariable.accountModel.create({ 
          Label  
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: create,
        eventList: eventVariable.accountModel.create({
          Label, 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: create,
        textMessage: emailToCompanyVariable.accountModel.create({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: create,
        textMessage: emailToUserVariable.accountModel.create({
          Label, 
          request 
        }),
      })(request, response, next);

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
        key: cacheVariable.accountModel.retrieve({ 
          Label, 
          request 
        }), 
        data: retrieve 
      })(request, response, next);

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
        keyList: cacheVariable.accountModel.update({ 
          Label, 
          request 
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: update,
        eventList: eventVariable.accountModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: update,
        textMessage: emailToCompanyVariable.accountModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: update,
        textMessage: emailToUserVariable.accountModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

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
      })(request, response, next)
      
      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.accountModel.delete({ 
          Label, 
          request 
        }), 
      })(request, response, next);
      
      // Create Event
      eventCreateMiddleware({
        Label,
        data: delete_object,
        eventList: eventVariable.accountModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToCompanyVariable.accountModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToUserVariable.accountModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete_object: delete_object
      })
    }
  ),  

  // Retrieve Account Controller
  retrieveAccount: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await ExtraModel.findOne({_id: (request as any).user})
        .populate({
          path: 'cRole',
          select: 'aTitle cPermission',
          populate: {
            path: 'cPermission',
            select: 'cMenu',
            populate: {
              path: 'cMenu.menu',
              select: 'aTitle cAccessPoint',
              populate: {
                path: 'cAccessPoint',
                select: 'aTitle',
              },
            },
          },
        });

      // Not Found
      if (!retrieve) next(new ErrorUtility(`${Label} Not Found`, 404))

      // Response
      response.status(200).json({ 
        success: true,
        message: `${ExtraLabel} Account Retrieved Successfully`,
        user_account_retrieve: retrieve
      })
    }
  ),

  // Update Account Controller
  updateAccount: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await ExtraModel.findByIdAndUpdate(
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
        message: `${ExtraLabel} Account Updated Successfully`,
        update: update
      })
    }
  ),
  
  // Email Update Account Controller
  emailUpdateAccount: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Update
      const update = await ExtraModel.findByIdAndUpdate(
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
        message: `${ExtraLabel} Account Email Updated Successfully`,
        update: update
      })
    }
  ),
    
  // Password Update Account Controller
  passwordUpdateAccount: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const retrieve = await ExtraModel.findById((request as any).user).select("+ePassword");

      // Save
      (retrieve as any).ePassword = request.body.eNewPassword;
      await (retrieve as any).save();

      // Response
      generateCookieUtility(201, `${ExtraLabel} Account Password Updated Successfully...`, `user_update`, retrieve, response)
    }
  ),

  // Delete Account Controller
  deleteAccount: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      // Retrieve
      let user = await ExtraModel.findById((request as any).user._id).populate({
        path: 'cRole',
        model: 'RoleModel',
        populate: {
          path: 'cMenus.menu',
          model: 'MenuModel',
        }
      })

      // Delete
      if (user) {
        await user.deleteOne({"_id": user._id})
      }
      
      // Response
      response.status(200).json({
        success: true,
        message: `${ExtraLabel} Profile Deleted Successfully`,
        delete: user
      })
    }
  ),
})

export default accountController;
