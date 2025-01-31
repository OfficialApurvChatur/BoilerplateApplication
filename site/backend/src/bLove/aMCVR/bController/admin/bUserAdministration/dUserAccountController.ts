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
          }
        });

      // Not Found
      if (!retrieve) next(new ErrorUtility(`${Label} Not Found`, 404))

      // Response
      response.status(200).json({ 
        success: true,
        message: "User Account Retrieved Successfully",
        user_account_retrieve: retrieve
      })
    }
  ),
  
})

export default userAccountController;
