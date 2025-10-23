import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminCounterModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/fAdminCounterModel";


const adminCounterValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminCounterModel, label: "AdminCounterModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminCounterModel, label: "AdminCounterModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminCounterModel, label: "AdminCounterModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AdminCounterModel, label: "AdminCounterModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminCounterModel, label: "AdminCounterModel" })
  ],
};

export default adminCounterValidation;
