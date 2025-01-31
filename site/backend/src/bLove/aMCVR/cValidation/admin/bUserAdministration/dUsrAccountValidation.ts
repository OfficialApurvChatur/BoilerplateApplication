import { body, param } from "express-validator";
import mongoose, { isValidObjectId } from "mongoose";

import ErrorUtility from "../../../../cUtility/aErrorUtility";
import { UserModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/dUserModel";
import { RoleModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/cRoleModel";
import { ProfileModel } from "../../../../aMCVR/aModel/admin/bUserAdministration/eProfileModel";


const userAccountValidation = {
  // Retrieve
  retrieve: () => []
}

export default userAccountValidation;
