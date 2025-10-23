import express from 'express';
import cloudinary from 'cloudinary';
import fs from "fs/promises";

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
import { singleAudioMiddleware } from '../../../../../bLove/bMiddleware/iMulterMiddleware';

import { AudioStorageModel } from '../../../aModel/aDatabaseManagement/dFileStorage/cAudioStorageModel';


const audioStorageController = (Model=AudioStorageModel, Label="AudioStorageModel") => ({
  // List Controller
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // List
      const list = await Model.find()
        .select("aImage aTitle bCreatedAt bUpdatedAt dStorageURL")
        .populate("bCreatedBy", "eImage eFirstname eLastname eEmail")
        .populate("bUpdatedBy", "eImage eFirstname eLastname eEmail");

      // Create Cache
      cacheCreateMiddleware({ 
        key: cacheVariable.audioStorageModel.list({ 
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

        dStorageURL: request.body.dStorageURL,
      })

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.audioStorageModel.create({ 
          Label  
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: create,
        eventList: eventVariable.audioStorageModel.create({
          Label, 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: create,
        textMessage: emailToCompanyVariable.audioStorageModel.create({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: create,
        textMessage: emailToUserVariable.audioStorageModel.create({
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
        key: cacheVariable.audioStorageModel.retrieve({ 
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
          
          dStorageURL: request.body.dStorageURL,
        }, {
          new: true,
          runValidators: true,
          useFindAndMidify: false
        }
      )

      // Delete Cache
      cacheDeleteMiddleware({ 
        keyList: cacheVariable.audioStorageModel.update({ 
          Label, 
          request 
        }), 
      })(request, response, next);

      // Create Event
      eventCreateMiddleware({
        Label,
        data: update,
        eventList: eventVariable.audioStorageModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: update,
        textMessage: emailToCompanyVariable.audioStorageModel.update({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: update,
        textMessage: emailToUserVariable.audioStorageModel.update({
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
        keyList: cacheVariable.audioStorageModel.delete({ 
          Label, 
          request 
        }), 
      })(request, response, next);
      
      // Create Event
      eventCreateMiddleware({
        Label,
        data: delete_object,
        eventList: eventVariable.audioStorageModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      // Create Email
      emailToCompanyMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToCompanyVariable.audioStorageModel.delete({
          Label, 
          request 
        }),
      })(request, response, next);

      emailToUserMiddleware({
        Label,
        data: delete_object,
        textMessage: emailToUserVariable.audioStorageModel.delete({
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

  // Single Audio Create Controller
  singleAudioCreate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      singleAudioMiddleware(request, response, async (err: any) => {
        if (err) {
          response.status(400).json({ message: "Error uploading file", error: err.message });
          return;
        }

        try {
          if (!request.file) {
            response.status(400).json({ message: "No file provided" });
            return;
          }

          if (!request.body.folder) {
            response.status(400).json({ message: "No folder name provided" });
            return;
          }

          // Upload audio to Cloudinary
          const result = await cloudinary.v2.uploader
            .upload(request.file.path, {
              folder: request.body.folder,
              resource_type: "raw"
            }
          );

          // Delete local file after upload
          await fs.unlink(request.file.path);

          // Respond with the Cloudinary URL
          response.status(200).json({ 
            message: "Audio uploaded successfully", 
            create: {
              url: result.secure_url,
              pid: result.public_id,
            }
          });
        } catch (error: any) {
          response.status(500).json({ message: "Error uploading to Cloudinary", error: error.message });
        }
      });

    }
  ),
  
  // Single Audio Update Controller
  singleAudioUpdate: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      singleAudioMiddleware(request, response, async (err) => {
        if (err) {
          response.status(400).json({ message: "Error uploading file", error: err.message });
          return;
        }

        const { public_id, folder } = request.body; // Public ID without folder prefix

        if (!request.file) {
          response.status(400).json({ message: "No file provided" });
          return;
        }

        if (!public_id) {
          response.status(400).json({ message: "Public ID is required" });
          return;
        }

        if (!folder) {
          response.status(400).json({ message: "Folder Name is required" });
          return;
        }

        try {
          // Include the folder path in the public ID
          const folderSpecificId = `${folder}/${public_id}`;

          // Replace the existing audio in Cloudinary using the folder-specific ID
          const result = await cloudinary.v2.uploader.upload(request.file.path, {
            public_id: folderSpecificId,
            overwrite: true,
            resource_type: "raw"
          });

          // Delete the temporary file
          await fs.unlink(request.file.path);

          // Respond with updated audio details
          response.status(200).json({
            message: "Audio updated successfully",
            update: {
              url: result.secure_url,
              pid: result.public_id,
            }
          });
        } catch (error: any) {
          response.status(500).json({ message: "Error updating audio", error: error.message });
        }
      });

    }
  ),
  
  // Single Audio Delete Controller
  singleAudioDelete: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      const { public_id, folder } = request.body; // Public ID without the folder prefix

      if (!public_id) {
        response.status(400).json({ message: "Public ID is required" });
        return;
      }

      if (!folder) {
        response.status(400).json({ message: "Folder Name is required" });
        return;
      }

      try {
        // Include the folder path in the public ID
        const folderSpecificId = `${folder}/${public_id}`;

        // Delete the audio from Cloudinary
        const result = await cloudinary.v2.uploader.destroy(folderSpecificId, {
          resource_type: "audio"
        });

        if (result.result === "not found") {
          response.status(404).json({ message: "Audio not found" });
          return;
        }

        response.status(200).json({ message: "Audio deleted successfully", public_id });
      } catch (error: any) {
        response.status(500).json({ message: "Error deleting audio", error: error.message });
      }

    }
  ),

})

export default audioStorageController;
