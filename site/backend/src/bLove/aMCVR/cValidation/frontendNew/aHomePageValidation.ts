import { body, param } from "express-validator";
import { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../cUtility/aErrorUtility";
import { BaseModel } from "../../aModel/admin/aSetting/aBaseModel";


const homePageValidation = {
  // List
  list: () => [],
  
}

export default homePageValidation;
