import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ForgotPasswordModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/dForgotPasswordModel';
import { UserModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel";


const forgotPasswordValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ForgotPasswordModel, label: "ForgotPasswordModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ForgotPasswordModel, label: "ForgotPasswordModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ForgotPasswordModel, label: "ForgotPasswordModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ForgotPasswordModel, label: "ForgotPasswordModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ForgotPasswordModel, label: "ForgotPasswordModel" })
  ],

  forgotPassword: () => [
    ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel", mode: "forgot-password" }),
  ],
};

export default forgotPasswordValidation;
