import express from 'express';
import cloudinary from 'cloudinary';

import { redisClient } from '../../../../../aConnection/eRedisConnection';
import loggerConnection from '../../../../../aConnection/bLoggerConnection';
import emailConnection from '../../../../../aConnection/hEmailConnection';
import catchAsyncMiddleware from '../../../../../bLove/bMiddleware/bCatchAsyncMiddleware';
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
      await redisClient.setex(`${Label}-list`, 15*60, JSON.stringify(list));
      loggerConnection().debug({ 
        message: "âœ… Cache Created Successfully",
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
      await redisClient.del(`${Label}-list`)
      loggerConnection().debug({ 
        message: "âŒ Cache Deleted Successfully",
      });

      // Create Event
      const io = request.app.get("io");
      if (create && io) {
        io.emit(`${Label}-Listed`, create)
        io.emit(`ActivityLog-Listed`, { title: create.aTitle })

        loggerConnection().debug({ 
          message: "âœ… Event Created Successfully",
        });
      };

      // Create Email
      if (create) {
        emailConnection.sendMail(
          {
            from: "official.apurv.chatur@gmail.com",
            to: "official.apurv.chatur@gmail.com",
            subject: `${Label} Created`,
            text: `
              We're verifying a recent sign-in for apurvchaturofficial@gmail.com:
              Timestamp: 	2025-09-19 11:33:28 GMT
              IP Address: 	103.176.135.230
              You're receiving this message because of a successful sign-in from a device that we didnâ€™t recognize. If you believe that this sign-in is suspicious, please reset your password immediately.
              If you're aware of this sign-in, please disregard this notice. This can happen when you use your browser's incognito or private browsing mode or clear your cookies.
              Thanks,
              Beehive Team
            `
          }, 
          (error, _info) => {
            if (error) {
              console.log("Some Error")
              loggerConnection().debug({ 
                message: "âŒ Email Creation Error",
              });
            } else {
              console.log("Success")
              loggerConnection().debug({ 
                message: "âœ… Email Created Successfully",
              });
            }
          }
        )
      }

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
      await redisClient.setex(`${Label}-retrieve:${request.params.id}`, 15*60, JSON.stringify(retrieve))
      loggerConnection().debug({ 
        message: "âœ… Cache Created Successfully",
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
      await redisClient.del(`${Label}-list`, `${Label}-retrieve:${request.params.id}`)
      loggerConnection().debug({ 
        message: "âŒ Cache Deleted Successfully",
      });
      
      // Create Event
      const io = request.app.get("io");
      if (update && io) {
        io.emit(`${Label}-Listed`, update)
        io.emit(`${Label}-Retrieved:${update?._id}`, update)
        io.emit(`ActivityLog-Listed`, { title: update.aTitle })

        loggerConnection().debug({ 
          message: "âœ… Event Created Successfully",
        });
      };      

      // Create Email
      if (update) {
        emailConnection.sendMail(
          {
            from: "official.apurv.chatur@gmail.com",
            to: "official.apurv.chatur@gmail.com",
            subject: `${Label} Updated`,
            text: `
              We're verifying a recent sign-in for apurvchaturofficial@gmail.com:
              Timestamp: 	2025-09-19 11:33:28 GMT
              IP Address: 	103.176.135.230
              You're receiving this message because of a successful sign-in from a device that we didnâ€™t recognize. If you believe that this sign-in is suspicious, please reset your password immediately.
              If you're aware of this sign-in, please disregard this notice. This can happen when you use your browser's incognito or private browsing mode or clear your cookies.
              Thanks,
              Beehive Team
            `
          }, 
          (error, _info) => {
            if (error) {
              console.log("Some Error")
              loggerConnection().debug({ 
                message: "âŒ Email Creation Error",
              });
            } else {
              console.log("Success")
              loggerConnection().debug({ 
                message: "âœ… Email Created Successfully",
              });
            }
          }
        )
      }

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
      if (delete_object?.aImage) {
        const publicId = (delete_object as any).aImage.split("/").pop().split(".")[0];
        await cloudinary.v2.uploader.destroy(`${Label}/${publicId}`);
      }
      
      // Delete Cache
      await redisClient.del(`${Label}-list`, `${Label}-retrieve:${request.params.id}`)
      loggerConnection().debug({ 
        message: "âŒ Cache Deleted Successfully",
      });

      // Create Event
      const io = request.app.get("io");
      if (delete_object && io) {
        io.emit(`${Label}-Listed`, delete_object)
        io.emit(`${Label}-Retrieved:${delete_object?._id}`, delete_object)
        io.emit(`ActivityLog-Listed`, { title: delete_object.aTitle })

        loggerConnection().debug({ 
          message: "âœ… Event Created Successfully",
        });
      };     
      
      // Create Email
      if (delete_object) {
        emailConnection.sendMail(
          {
            from: "official.apurv.chatur@gmail.com",
            to: "official.apurv.chatur@gmail.com",
            subject: `${Label} Deleted`,
            text: `
              We're verifying a recent sign-in for apurvchaturofficial@gmail.com:
              Timestamp: 	2025-09-19 11:33:28 GMT
              IP Address: 	103.176.135.230
              You're receiving this message because of a successful sign-in from a device that we didnâ€™t recognize. If you believe that this sign-in is suspicious, please reset your password immediately.
              If you're aware of this sign-in, please disregard this notice. This can happen when you use your browser's incognito or private browsing mode or clear your cookies.
              Thanks,
              Beehive Team
            `
          }, 
          (error, _info) => {
            if (error) {
              console.log("Some Error")
              loggerConnection().debug({ 
                message: "âŒ Email Creation Error",
              });
            } else {
              console.log("Success")
              loggerConnection().debug({ 
                message: "âœ… Email Created Successfully",
              });
            }
          }
        )
      }
      
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
