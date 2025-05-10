import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../cUtility/aErrorUtility";
import { BaseModel } from "../../aModel/admin/aSetting/aBaseModel";


const adminHomePageValidation = {
  // List
  list: () => [],
  
}

export default adminHomePageValidation;
