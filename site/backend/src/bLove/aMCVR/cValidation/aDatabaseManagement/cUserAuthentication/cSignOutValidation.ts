import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { SignOutModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/cSignOutModel';


const signOutValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignOutModel, label: "SignOutModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: SignOutModel, label: "SignOutModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SignOutModel, label: "SignOutModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: SignOutModel, label: "SignOutModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: SignOutModel, label: "SignOutModel" })
  ],

  signOut: () => []
};

export default signOutValidation;
