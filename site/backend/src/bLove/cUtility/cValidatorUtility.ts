import mongoose from "mongoose";
import express from "express";
import { body, param } from "express-validator";

import ErrorUtility from "./aErrorUtility";


type TTitleArgs = {
  Model: mongoose.Model<any>;
  label?: string;
  mode?: "create" | "update";
};

type TEmailArgs = {
  Model: mongoose.Model<any>;
  label?: string;
  mode?: "sign-in";
};

type TIdArgs = {
  Model: mongoose.Model<any>;
  label?: string;
  ExtraModel?: mongoose.Model<any>;
  extraLabel?: string;
};

const validatorUtility = {
  aImage: () => [
    body("aImage")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Please select image"),
  ],

  aTitle: ({ Model, label = "Record", mode = "create" }: TTitleArgs) => [
    body("aTitle")
      .notEmpty()
      .withMessage(`Please enter ${label} title`),

    body("aTitle")
      .isLength({ min: 3, max: 50 })
      .withMessage(`${label} title must be 3 - 50 characters`),

    body("aTitle").custom(async (value, { req }) => {
      const exists = await Model.findOne({ aTitle: value });

      if (!exists) return true; // No conflict

      if (mode === "create") {
        throw new ErrorUtility(`${label} title already exists`, 401);
      }

      if (mode === "update") {
        if (String(exists._id) !== req.params?.id) {
          throw new ErrorUtility(`${label} title already exists`, 401);
        }
      }

      return true;
    }),
  ],

  aSubtitle: () => [
    body("aSubtitle")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 250 })
      .withMessage("Subtitle must be 3 - 250 characters"),
  ],

  aDescription: () => [
    body("aDescription")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 1000 })
      .withMessage("Description must be 3 - 1000 characters"),
  ],

  aDetail: () => [
    body("aDetail")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 5000 })
      .withMessage("Detail must be 3 - 5000 characters"),
  ],

  aStatus: () => [
    body("aStatus")
      .optional({ checkFalsy: true })
      .notEmpty()
      .withMessage("Please select status"),
  ],

  aState: () => [
    body("aState")
      .optional({ checkFalsy: true })
      .notEmpty()
      .withMessage("Please select state"),
  ],

  cAccessPoint: ({ Model, label = "Record" }: TIdArgs) => [
    body("cAccessPoint")
      .notEmpty()
      .withMessage("Please select access point")
      .custom(async (value: mongoose.ObjectId[]) => {
        await Promise.all(
          value.map(async (each) => {
            const idAsString = each as unknown as string;

            if (!mongoose.isValidObjectId(idAsString)) {
              throw new ErrorUtility(`Invalid MongoDB ID format for ${label}`, 400);
            }

            const retrieve = await Model.findById(idAsString);
            if (!retrieve) throw new ErrorUtility(`${label} Not Found`, 404);
          })
        );
        return true;
      }),
  ],

  cMenu: ({ Model, label = "Record", ExtraModel, extraLabel = "Record" }: TIdArgs) => [
    body("cMenu")
      .isArray({ min: 1 })
      .withMessage("Please provide at least one menu entry"),

    body("cMenu.*.menu")
      .notEmpty()
      .withMessage("Menu is required")
      .bail()
      .custom(async (value) => {
        if (!mongoose.isValidObjectId(value)) {
          throw new ErrorUtility("Invalid MongoDB ID format for Menu", 400);
        }
        const menu = await Model.findById(value);
        if (!menu) throw new ErrorUtility("Menu Not Found", 404);
        return true;
      }),

    body("cMenu.*.access").optional().isArray(),

    body("cMenu.*.access.*.accessPoint")
      .optional()
      .custom(async (value) => {
        if (value && !mongoose.isValidObjectId(value)) {
          throw new ErrorUtility("Invalid MongoDB ID format for Access Point", 400);
        }
        if (value) {
          const accessPoint = await ExtraModel?.findById(value);
          if (!accessPoint) throw new ErrorUtility("Access Point Not Found", 404);
        }
        return true;
      }),

    body("cMenu.*.access.*.hasAccess")
      .optional()
      .isBoolean()
      .withMessage("hasAccess must be a boolean"),
  ],

  cPermission: ({ Model, label = "Record" }: TIdArgs) => [
    body("cPermission")
      .notEmpty()
      .withMessage("Please select permission")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format for Permission")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await Model.findById(value);
        if (!retrieve) throw new ErrorUtility("Permission Not Found", 404);
        return true;
      }),
  ],

  cRole: ({ Model, label = "Record" }: TIdArgs) => [
    body("cRole")
      .notEmpty()
      .withMessage("Please select role")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format for Role")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await Model.findById(value);
        if (!retrieve) throw new ErrorUtility("Role Not Found", 404);
        return true;
      }),
  ],

  cUser: ({ Model, label = "Record" }: TIdArgs) => [
    body("cUser")
      .notEmpty()
      .withMessage("Please select user")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format for User")
      .custom(async (value: mongoose.ObjectId) => {
        const retrieve = await Model.findById(value);

        if (!retrieve) {
          throw new ErrorUtility("User Not Found", 404);
        }

        if (retrieve.cProfile) {
          throw new ErrorUtility("User is already associated with another profile", 400);
        }

        return true;
      }),
  ],

  cProfile: ({ Model, label = "Record", ExtraModel, extraLabel = "Record" }: TIdArgs) => [
    body("cProfile")
      .notEmpty()
      .withMessage("Please select profile")
      .isMongoId()
      .withMessage("Invalid MongoDB ID format for Profile")
      .custom(async (value: mongoose.ObjectId, { req }: any) => {
        const retrieve = await ExtraModel?.findById(value);
        const user_retrieve = await Model.findById(req.params?.id);

        if (!retrieve) {
          throw new ErrorUtility("Profile Not Found", 404);
        }

        if (retrieve.cUser && String(retrieve._id) !== String(user_retrieve?.cProfile)) {
          throw new ErrorUtility("Profile is already associated with another user", 400);
        }

        return true;
      }),
  ],

  eImage: () => [
    body("eImage")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Please select image"),
  ],
  eFirstname: () => [
    body("eFirstname")
      .notEmpty()
      .withMessage("Please enter firstname"),
  ],

  eLastname: () => [
    body("eLastname")
      .notEmpty()
      .withMessage("Please enter lastname"),
  ],

  eEmail: ({ Model, label = "Record", mode }: TEmailArgs) => [
    body("eEmail")
      .notEmpty()
      .withMessage("Please enter email")
      .isEmail()
      .withMessage("Please enter valid email")
      .custom(async (value) => {
        const retrieve = await Model.findOne({ eEmail: value });
        if (!retrieve && mode === "sign-in") throw new ErrorUtility("Invalid Email or Password", 401);
        if (retrieve && mode !== "sign-in") throw new ErrorUtility("User already exists...", 401);
        return true;
      }),
  ],

  eMobile: () => [
    body("eMobile")
      .notEmpty()
      .withMessage("Please enter mobile"),
  ],

  ePassword: () => [
    body("ePassword")
      .notEmpty()
      .withMessage("Please enter password")
      .isLength({ min: 8, max: 16 })
      .withMessage("Password must be 8 - 16 characters"),
  ],

  eConfirmPassword: () => [
    body("eConfirmPassword")
      .notEmpty()
      .withMessage("Please enter confirm password")
      .custom((value, { req }) => {
        if (value !== req.body.ePassword) {
          throw new ErrorUtility("Please match the passwords", 404);
        }
        return true;
      }),
  ],

  eOldPassword: ({ Model, label = "Record" }: TIdArgs) => [
    body("eOldPassword")
      .notEmpty()
      .withMessage("Please enter old password")
      .custom(async (value, { req }) => {
        const retrieve = await Model.findById((req as any).user).select("+ePassword");

        if (!retrieve) {
          throw new ErrorUtility("User Not Found", 401);
        }

        const isMatch = await retrieve.fComparePasswordMethod(value);
        if (!isMatch) {
          throw new ErrorUtility("Incorrect Old Password", 401);
        }

        return true;
      }),
  ],

  idParam: ({ Model, label = "Record" }: TIdArgs) => [
    param("id")
      .custom(value => {
        if (!mongoose.isValidObjectId(value)) {
          throw new ErrorUtility(`Please provide valid ${label} id`, 404);
        }
        return true;
      })
      .custom(async value => {
        const exists = await Model.findById(value);
        if (!exists) throw new ErrorUtility(`${label} Not Found`, 404);
        return true;
      }),
  ],

  validateUserExists: ({ Model, label = "Record" }: TIdArgs) => [
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      try {
        const retrieve = await Model.findOne({ _id: (req as any).user });

        if (!retrieve) {
          return next(new ErrorUtility("User Not Found", 404));
        }

        next();
      } catch (error) {
        next(error);
      }
    },
  ],

};

export default validatorUtility;
