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

import { AdminProjectSectionModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/kAdminProjectSectionModel';


const adminProjectSectionController = (Model=AdminProjectSectionModel, Label="AdminProjectSectionModel") => ({
  // List Controller
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aImage aTitle bCreatedAt bUpdatedAt")
        .populate("bCreatedBy", "eImage eFirstname eLastname eEmail")
        .populate("bUpdatedBy", "eImage eFirstname eLastname eEmail")
        .populate("cProjectGroups", "aTitle")
        .populate("cProjects", "aTitle");

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.adminProjectSectionModel.list({ 
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

        cProjectGroups: request.body.cProjectGroups,
        cProjects: request.body.cProjects,
      })

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.adminProjectSectionModel.create({ 
          Label  
        }), 
      });

      // Create Event
      eventCreateMiddleware({
        Label,
        data: create,
        eventList: eventVariable.adminProjectSectionModel.create({
          Label, 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: create,
        textMessage: emailToCompanyVariable.adminProjectSectionModel.create({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: create,
        textMessage: emailToUserVariable.adminProjectSectionModel.create({
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
        .populate("bUpdatedBy", "eImage eFirstname eLastname eEmail")
        .populate("cProjectGroups", "aImage aTitle aSubtitle aDescription bCreatedAt bUpdatedAt")
        .populate("cProjects", "aImage aTitle aSubtitle aDescription bCreatedAt bUpdatedAt");

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.adminProjectSectionModel.retrieve({ 
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
          
          cProjectGroups: request.body.cProjectGroups,
          cProjects: request.body.cProjects,
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.adminProjectSectionModel.update({ 
          Label, 
          request 
        }), 
      });

      // Create Event
      eventCreateMiddleware({
        Label,
        data: update,
        eventList: eventVariable.adminProjectSectionModel.update({
          Label, 
          request 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: update,
        textMessage: emailToCompanyVariable.adminProjectSectionModel.update({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: update,
        textMessage: emailToUserVariable.adminProjectSectionModel.update({
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
        keyList: cacheVariable.adminProjectSectionModel.delete({ 
          Label, 
          request 
        }), 
      });
      
      // Create Event
      eventCreateMiddleware({
        Label,
        data: delete_object,
        eventList: eventVariable.adminProjectSectionModel.delete({
          Label, 
          request 
        }),
        request
      });

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToCompanyVariable.adminProjectSectionModel.delete({
          Label, 
          request 
        }),
      });

      emailToUserMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToUserVariable.adminProjectSectionModel.delete({
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
})

export default adminProjectSectionController;
