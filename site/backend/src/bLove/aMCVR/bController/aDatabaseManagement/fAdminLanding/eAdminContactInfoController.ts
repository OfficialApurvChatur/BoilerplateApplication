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

import { AdminContactInfoModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/eAdminContactInfoModel';


const adminContactInfoController = (Model=AdminContactInfoModel, Label="AdminContactInfoModel") => ({
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
        key: cacheVariable.adminContactInfoModel.list({ 
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
        keyList: cacheVariable.adminContactInfoModel.create({ 
          Label  
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: create,
        eventList: eventVariable.adminContactInfoModel.create({
          Label, 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: create,
        textMessage: emailToCompanyVariable.adminContactInfoModel.create({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: create,
        textMessage: emailToUserVariable.adminContactInfoModel.create({
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
        key: cacheVariable.adminContactInfoModel.retrieve({ 
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
        keyList: cacheVariable.adminContactInfoModel.update({ 
          Label, 
          request 
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: update,
        eventList: eventVariable.adminContactInfoModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: update,
        textMessage: emailToCompanyVariable.adminContactInfoModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: update,
        textMessage: emailToUserVariable.adminContactInfoModel.update({
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
        keyList: cacheVariable.adminContactInfoModel.delete({ 
          Label, 
          request 
        }), 
      })(request, response, next);
      
      // Create Event
      eventCreateMiddleware({
        Label,
        data: delete_object,
        eventList: eventVariable.adminContactInfoModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToCompanyVariable.adminContactInfoModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToUserVariable.adminContactInfoModel.delete({
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
})

export default adminContactInfoController;
