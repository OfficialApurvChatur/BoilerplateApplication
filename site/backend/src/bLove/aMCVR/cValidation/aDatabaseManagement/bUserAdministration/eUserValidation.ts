import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { UserModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel';


const userValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: UserModel, label: "UserModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: UserModel, label: "UserModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: UserModel, label: "UserModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: UserModel, label: "UserModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: UserModel, label: "UserModel" })
  ],
};

export default userValidation;
