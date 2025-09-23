import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { SignUpModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/bSignUpModel';
import { UserModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel";
import { RoleModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/dRoleModel";


const signUpValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignUpModel, label: "SignUpModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: SignUpModel, label: "SignUpModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignUpModel, label: "SignUpModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: SignUpModel, label: "SignUpModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: SignUpModel, label: "SignUpModel" })
  ],

  signUp: () => [
    ...validatorUtility.aTitle({ Model: UserModel, label: "UserModel", mode: "update" }),
    ...validatorUtility.cRole({ Model: RoleModel, label: "RoleModel" }),
    ...validatorUtility.eFirstname(),
    ...validatorUtility.eLastname(),
    ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.eMobile(),
    ...validatorUtility.ePassword(),
    ...validatorUtility.eConfirmPassword(),
  ],
};

export default signUpValidation;
