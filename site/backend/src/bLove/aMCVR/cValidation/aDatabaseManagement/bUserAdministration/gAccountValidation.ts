import validatorUtility from "../../../../cUtility/cValidatorUtility";
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
};

export default accountValidation;
