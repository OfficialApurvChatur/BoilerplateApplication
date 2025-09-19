import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminContactInfoModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/eAdminContactInfoModel';


const adminContactInfoValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminContactInfoModel, label: "AdminContactInfoModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminContactInfoModel, label: "AdminContactInfoModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminContactInfoModel, label: "AdminContactInfoModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AdminContactInfoModel, label: "AdminContactInfoModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminContactInfoModel, label: "AdminContactInfoModel" })
  ],
};

export default adminContactInfoValidation;
