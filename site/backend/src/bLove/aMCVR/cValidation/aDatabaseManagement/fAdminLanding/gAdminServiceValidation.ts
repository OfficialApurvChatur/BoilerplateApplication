import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminServiceModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/gAdminServiceModel";


const adminServiceValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminServiceModel, label: "AdminServiceModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dLinks(),
    ...validatorUtility.dIcon(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminServiceModel, label: "AdminServiceModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminServiceModel, label: "AdminServiceModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dLinks(),
    ...validatorUtility.dIcon(),
    ...validatorUtility.idParam({ Model: AdminServiceModel, label: "AdminServiceModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminServiceModel, label: "AdminServiceModel" })
  ],
};

export default adminServiceValidation;
