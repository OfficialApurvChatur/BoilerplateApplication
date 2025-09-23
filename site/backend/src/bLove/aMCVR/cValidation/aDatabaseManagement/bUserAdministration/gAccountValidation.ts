import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { UserModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/eUserModel";
import { AccountModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/gAccountModel';


const accountValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AccountModel, label: "AccountModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AccountModel, label: "AccountModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AccountModel, label: "AccountModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AccountModel, label: "AccountModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AccountModel, label: "AccountModel" })
  ],

  retrieveAccount: () => [
    ...validatorUtility.validateUserExists({ Model: UserModel, label: "UserModel" })
  ],

  updateAccount: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: UserModel, label: "UserModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.eImage(),
    ...validatorUtility.eFirstname(),
    ...validatorUtility.eLastname(),
    ...validatorUtility.eMobile(),
    ...validatorUtility.validateUserExists({ Model: UserModel, label: "UserModel" })
  ],

  emailUpdateAccount: () => [
    ...validatorUtility.eEmail({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.validateUserExists({ Model: UserModel, label: "UserModel" })
  ],

  passwordUpdateAccount: () => [
    ...validatorUtility.eOldPassword({ Model: UserModel, label: "UserModel" }),
    ...validatorUtility.ePassword(),
    ...validatorUtility.eConfirmPassword(),
    ...validatorUtility.validateUserExists({ Model: UserModel, label: "UserModel" })
  ]
};

export default accountValidation;
