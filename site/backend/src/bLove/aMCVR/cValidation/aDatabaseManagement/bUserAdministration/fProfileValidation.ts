import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { UserModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel";
import { ProfileModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/fProfileModel';


const profileValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProfileModel, label: "ProfileModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cUser({ Model: UserModel, label: "UserModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ProfileModel, label: "ProfileModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProfileModel, label: "ProfileModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cUser({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.idParam({ Model: ProfileModel, label: "ProfileModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ProfileModel, label: "ProfileModel" })
  ],

  listMini: () => [],
};

export default profileValidation;
