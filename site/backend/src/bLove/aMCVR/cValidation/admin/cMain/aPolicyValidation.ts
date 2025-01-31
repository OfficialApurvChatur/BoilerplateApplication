import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { PolicyModel } from "../../../../aMCVR/aModel/admin/cMain/aPolicyModel";


const policyValidation = {
  // List
  list: () => [],

  // Create
  create: () => [
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters")
      .custom(async value => {
        const retrieve = await PolicyModel.findOne({aTitle: value});
        if (retrieve) throw new ErrorUtility("Title already exists...", 401);
        return true;
      }),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),
    
    body("dPolicyNumber")
      .isLength({ min: 3, max: 100 }).withMessage("Policy Number must be 3 - 100 characters"),
    body("dPolicyType")
      .isLength({ min: 3, max: 100 }).withMessage("Policy Type must be 3 - 100 characters"),
    body("dPolicyStartDate")
      .isISO8601().toDate().withMessage("Invalid Policy Start"),
    body("dPolicyEndDate")
      .isISO8601().toDate().withMessage("Invalid Policy End Date"),
    body("dPremiumAmount")
      .isFloat({ min: 5, max: 5000 }).withMessage("Premium Amount must between 5 - 5000"),
    body("dDeductibleAmount")
      .isFloat({ min: 5, max: 5000 }).withMessage("Deductible Amount must between 5 - 5000"),
    body("dCoverageDetails")
      .isLength({ min: 3, max: 100 }).withMessage("Coverage Details must be 3 - 100 characters"),
  ],

  // Retrieve
  retrieve: () => [
    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true
      })
      .custom(async value => {
        const retrieve = await PolicyModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Policy Not Found", 404)
        return true;
      }),
  ],

  // Update
  update: () => [
    body("aTitle")
      .notEmpty().withMessage("Please enter title")
      .isLength({ min: 3, max: 50 }).withMessage("Title must be 3 - 50 characters"),
    body("aSubtitle")
      .optional()
      .isLength({ min: 3, max: 100 }).withMessage("Subtitle must be 3 - 100 characters"),

    param("id")
      .custom(value => {
        if (!isValidObjectId(value)) throw new ErrorUtility("Please provide valid parameter", 404)
        return true;
      })
      .custom(async value => {
       const retrieve = await PolicyModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Policy Not Found", 404)
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
        const retrieve = await PolicyModel.findById(value);
        if (!retrieve) throw new ErrorUtility("Policy Not Found", 404)
        return true;
      }),
  ],
  
}

export default policyValidation;
