import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { AccessPointModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/aAccessPointModel";


const accessPointValidation = {
  // List
  list: () => [],

  // Create
  create: () => [
    body("aImage")
      .optional({ checkFalsy: true })
      .isURL().withMessage("Please select image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async value => {
        const retrieve = await AccessPointModel.findOne({aTitle: value});
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

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await AccessPointModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Access Point Not Found", 404)
        return true;
      }),
  ],

  // Update
  update: () => [
    body("aImage")
      .optional({ checkFalsy: true })
      .isURL().withMessage("Please select image"),
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async (value: any, { req: request }: any) => {
        const retrieve = await AccessPointModel.findOne({aTitle: value});
        if (retrieve && String(retrieve?._id) !== request.params?.id) throw new ErrorUtility("Title already exists...", 401);
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

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await AccessPointModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Access Point Not Found", 404)
        return true;
      }),
  ],

  // Delete
  delete: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await AccessPointModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Access Point Not Found", 404)
        return true;
      }),
  ],

  // List For Menu Create & Update
  listForMenuCreateAndUpdate: () => [],
}

export default accessPointValidation;
