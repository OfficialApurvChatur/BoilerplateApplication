import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { SignUpModel } from '../../../aModel/aDatabaseManagement/cUserAuthentication/bSignUpModel';


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
};

export default signUpValidation;
