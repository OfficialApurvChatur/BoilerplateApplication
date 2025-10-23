import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminProjectModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/mAdminProjectModel";
import { AdminProjectGroupModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/lAdminProjectGroupModel";


const adminProjectGroupValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjects({ Model: AdminProjectModel, label: "AdminProjectModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjects({ Model: AdminProjectModel, label: "AdminProjectModel" }),
    ...validatorUtility.idParam({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel" })
  ],

  listMini: () => [],
};

export default adminProjectGroupValidation;
