import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { SignInModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/aSignInModel';
import { UserModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel";


const signInValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignInModel, label: "SignInModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: SignInModel, label: "SignInModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignInModel, label: "SignInModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: SignInModel, label: "SignInModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: SignInModel, label: "SignInModel" })
  ],

  signIn: () => [
    ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel", mode: "sign-in" }),
    ...validatorUtility.ePassword(),
  ],
};

export default signInValidation;
