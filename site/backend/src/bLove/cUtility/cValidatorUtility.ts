import { body, param } from "express-validator";
import { isValidObjectId, Model } from "mongoose";

import ErrorUtility from "./aErrorUtility";


type TTitleArgs = {
  Model: Model<any>;
  label?: string;
  mode?: "create" | "update";
};

type TIdArgs = {
  Model: Model<any>;
  label?: string;
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

  idParam: ({ Model, label = "Record" }: TIdArgs) => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) {
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
};

export default validatorUtility;
