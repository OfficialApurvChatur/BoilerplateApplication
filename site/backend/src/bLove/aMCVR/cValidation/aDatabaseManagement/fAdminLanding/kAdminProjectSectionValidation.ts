import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminProjectSectionModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/kAdminProjectSectionModel";
import { AdminProjectGroupModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/lAdminProjectGroupModel";
import { AdminProjectModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/mAdminProjectModel";


const adminProjectSectionValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectSectionModel, label: "AdminProjectSectionModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjectGroups({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel" }),
    ...validatorUtility.cProjects({ Model: AdminProjectModel, label: "AdminProjectModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminProjectSectionModel, label: "AdminProjectSectionModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectSectionModel, label: "AdminProjectSectionModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjectGroups({ Model: AdminProjectGroupModel, label: "AdminProjectGroupModel" }),
    ...validatorUtility.cProjects({ Model: AdminProjectModel, label: "AdminProjectModel" }),
    ...validatorUtility.idParam({ Model: AdminProjectSectionModel, label: "AdminProjectSectionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminProjectSectionModel, label: "AdminProjectSectionModel" })
  ],
};

export default adminProjectSectionValidation;
