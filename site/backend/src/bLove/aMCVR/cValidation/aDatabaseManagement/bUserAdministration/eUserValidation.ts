import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { UserModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel';
import { RoleModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/dRoleModel";
import { ProfileModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/fProfileModel";


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
    ...validatorUtility.cRole({ Model: RoleModel, label: "RoleModel" }),
    // ...validatorUtility.cProfile({ Model: UserModel, label: "UserModel", ExtraModel: ProfileModel, extraLabel: "ProfileModel" }),
    ...validatorUtility.eFirstname(),
    ...validatorUtility.eLastname(),
    ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.eMobile(),
    ...validatorUtility.ePassword(),
    ...validatorUtility.eConfirmPassword(),
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
    ...validatorUtility.cRole({ Model: RoleModel, label: "RoleModel" }),
    // ...validatorUtility.cProfile({ Model: UserModel, label: "UserModel", ExtraModel: ProfileModel, extraLabel: "ProfileModel" }),
    ...validatorUtility.eFirstname(),
    ...validatorUtility.eLastname(),
    // ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.eMobile(),
    // ...validatorUtility.ePassword(),
    // ...validatorUtility.eConfirmPassword(),
    ...validatorUtility.idParam({ Model: UserModel, label: "UserModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: UserModel, label: "UserModel" })
  ],

  listMini: () => [],
};

export default userValidation;
