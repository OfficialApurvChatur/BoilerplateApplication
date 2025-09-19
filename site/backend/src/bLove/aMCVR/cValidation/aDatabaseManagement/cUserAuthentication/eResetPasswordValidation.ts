import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ResetPasswordModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/eResetPasswordModel';


const resetPasswordValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ResetPasswordModel, label: "ResetPasswordModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ResetPasswordModel, label: "ResetPasswordModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ResetPasswordModel, label: "ResetPasswordModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ResetPasswordModel, label: "ResetPasswordModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ResetPasswordModel, label: "ResetPasswordModel" })
  ],
};

export default resetPasswordValidation;
