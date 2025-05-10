import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../cUtility/aErrorUtility";
import { ContactFormModel } from "../../aModel/admin/dFrontendLanding/cContactFormModel";


const contactPageValidation = {
  // Create
  create: () => [
    body("aImage")
      .optional({ checkFalsy: true })
      .isURL().withMessage("Please select image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async value => {
        const retrieve = await ContactFormModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 250 }).withMessage("Subtitle must be 3 - 250 characters"),
    body("aDescription")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 1000 }).withMessage("Description must be 3 - 1000 characters"),
    body("aDetail")
      .optional({ checkFalsy: true })
      .isLength({ min: 3, max: 5000 }).withMessage("Detail must be 3 - 5000 characters"),
    body("aStatus")
      .optional({ checkFalsy: true })
      .notEmpty().withMessage("Please select status"), 
    body("aState")
      .optional({ checkFalsy: true })
      .notEmpty().withMessage("Please select state"),  
  ],
  
}

export default contactPageValidation;
