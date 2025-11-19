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
      .isLength({ min: 3, max: 50000 })
      .withMessage("Detail must be 3 - 50000 characters"),
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

  cBranchGroups: ({ Model, label = "Record" }: TIdArgs) => [
    body("cBranchGroups")
      .optional()
      // .isArray({ min: 1 })
      // .withMessage("Please select at least one branch group")
      // .bail()
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

  cBranches: ({ Model, label = "Record" }: TIdArgs) => [
    body("cBranches")
      .optional()
      // .isArray({ min: 1 })
      // .withMessage("Please select at least one branch")
      // .bail()
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

  cProjectGroups: ({ Model, label = "Record" }: TIdArgs) => [
    body("cProjectGroups")
      .optional()
      .isArray({ min: 1 })
      .withMessage("Please select at least one project group")
      .bail()
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

  cProjects: ({ Model, label = "Record" }: TIdArgs) => [
    body("cProjects")
      .optional()
      .isArray({ min: 1 })
      .withMessage("Please select at least one project")
      .bail()
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

  dTag: () => [
    body("dTag")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Tag must be a string")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Tag cannot be empty")
  ],

  dTag2: () => [
    body("dTag")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Tag must be a string")
      .isIn(["truly", "relatively"])
      .withMessage("Tag must be one of: Truly, Relatively")
      .trim(),
  ],

  dSocialLinks: () => [
    body("dSocialLinks")
      .optional({ checkFalsy: true })
      .isArray({ min: 1 })
      .withMessage("Social links must be an array with at least one item"),

    body("dSocialLinks.*.aLinkTitle")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Social link title must be a string")
      .trim()
      .notEmpty()
      .withMessage("Social link title cannot be empty"),

    body("dSocialLinks.*.bLinkURL")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Invalid social link URL format")
      .trim()
  ],

  dWebLinks: () => [
    body("dWebLinks")
      .optional({ checkFalsy: true })
      .isArray({ min: 1 })
      .withMessage("Web links must be an array with at least one item"),

    body("dWebLinks.*.aLinkTitle")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Web link title must be a string")
      .trim()
      .notEmpty()
      .withMessage("Web link title cannot be empty"),

    body("dWebLinks.*.bLinkURL")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Invalid web link URL format")
      .trim()
  ],

  dTechIcon: () => [
    // Validate that dTechIcon is an array
    body("dTechIcon")
      .optional({ checkFalsy: true })
      .isArray({ min: 1 })
      .withMessage("Tech icon list must be an array with at least one item"),

    // Validate each icon label
    body("dTechIcon.*.aIconLabel")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Each tech icon label must be a string")
      .trim()
      .notEmpty()
      .withMessage("Tech icon label cannot be empty"),

    // Validate each icon value
    body("dTechIcon.*.bIconValue")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Each tech icon value must be a string")
      .trim()
      .notEmpty()
      .withMessage("Tech icon value cannot be empty"),
  ],

  dLinks: () => [
    body("dLinks")
      .optional({ checkFalsy: true })
      .isArray()
      .withMessage("dLinks must be an array of link objects"),

    body("dLinks.*.aLinkTitle")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Each link title must be a string")
      .trim()
      .notEmpty()
      .withMessage("Each link title cannot be empty"),

    body("dLinks.*.bLinkURL")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Each link URL must be a valid URL")
      .trim()
      .notEmpty()
      .withMessage("Each link URL cannot be empty"),
  ],

  dIcon: () => [
    body("dIcon")
      .optional({ checkFalsy: true })
      .isObject()
      .withMessage("dIcon must be an object"),

    body("dIcon.aIconLabel")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Icon label must be a string")
      .trim()
      .notEmpty()
      .withMessage("Icon label cannot be empty"),

    body("dIcon.bIconValue")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Icon value must be a string")
      .trim()
      .notEmpty()
      .withMessage("Icon value cannot be empty"),
  ],

  dGalleryImages: () => [
    body("dGalleryImages")
      .optional({ checkFalsy: true })
      .isArray()
      .withMessage("dGalleryImages must be an array of image URLs"),

    body("dGalleryImages.*")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Each gallery image must be a string")
      .trim()
      .isURL()
      .withMessage("Each gallery image must be a valid URL"),
  ],

  dStorageURL: () => [
    body("dStorageURL")
      .optional({ checkFalsy: true })
      .isURL()
      .withMessage("Please enter storage url"),
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
        if (mode === "sign-in" && !retrieve) throw new ErrorUtility("Invalid Email or Password", 401);
        if (mode !== "sign-in" && retrieve) throw new ErrorUtility("User already exists...", 401);
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
