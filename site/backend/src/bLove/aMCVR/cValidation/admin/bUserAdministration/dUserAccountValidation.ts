import express from "express";
import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";


const userAccountValidation = {
  // Retrieve
  retrieve: () => [],

  // Update
  update: () => [
    body("aImage")
      .notEmpty().withMessage("Please select cover image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async (value: any, { req: request }: any) => {
        const retrieve = await UserModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== String(request.user)) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    body("eImage")
      .notEmpty().withMessage("Please select profile image"),
    body("eFirstname")
      .notEmpty().withMessage("Please enter firstname"),
    body("eLastname")
      .notEmpty().withMessage("Please enter lastname"),  
    body("eMobile")
      .notEmpty().withMessage("Please enter mobile"),  

    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      let retrieve = await UserModel.findOne({_id: (request as any).user})
      if (!retrieve) next(new ErrorUtility(`User Not Found`, 404))
      next();
    },
  ],
  
  // Email Update
  emailUpdate: () => [
    body("eEmail")
      .notEmpty().withMessage("Please enter email")
      .isEmail().withMessage("Please enter valid email")
      .custom(async (value: any, { req: request }: any) => {
        const retrieve = await UserModel.findOne({eEmail: value});
        if (retrieve && String(retrieve?._id) !== String(request.user)) throw new ErrorUtility("User already exists...", 401);
        return true;
      }),

    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      let retrieve = await UserModel.findOne({_id: (request as any).user})
      if (!retrieve) next(new ErrorUtility(`User Not Found`, 404))
      next();
    },
  ],
  
  // Password Update
  passwordUpdate: () => [
    body("eOldPassword")
      .notEmpty().withMessage("Please enter old password")
      .custom(async (value, { req: request }) => {
        const retrieve = await UserModel.findById(request.user).select("+ePassword");
        if (!retrieve) throw new ErrorUtility("User Not Found", 401)
        const isMatch = await retrieve.fComparePasswordMethod(value);
        if (!isMatch) throw new ErrorUtility("Incorrect Old Password", 401)
        return true;
      }),
    body("eNewPassword")
      .notEmpty().withMessage("Please enter new password"),
    body("eConfirmPassword")
      .notEmpty().withMessage("Please enter confirm password")
      .custom((value, { req: request }) => {
        if (value !== request.body.eNewPassword) {
          throw new ErrorUtility("Please match the passwords", 404);
        }
        return true;
      }),    

    async (request: express.Request, response: express.Response, next: express.NextFunction) => {
      let retrieve = await UserModel.findOne({_id: (request as any).user})
      if (!retrieve) next(new ErrorUtility(`User Not Found`, 404))
      next();
    },
  ],
  
}

export default userAccountValidation;
