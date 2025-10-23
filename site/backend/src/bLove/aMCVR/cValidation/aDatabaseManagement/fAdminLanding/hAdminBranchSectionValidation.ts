import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminBranchSectionModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/hAdminBranchSectionModel";
import { AdminBranchGroupModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/iAdminBranchGroupModel";
import { AdminBranchModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/jAdminBranchModel";


const adminBranchSectionValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchSectionModel, label: "AdminBranchSectionModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranchGroups({ Model: AdminBranchGroupModel, label: "AdminBranchGroupnModel" }),
    ...validatorUtility.cBranches({ Model: AdminBranchModel, label: "AdminBranchModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminBranchSectionModel, label: "AdminBranchSectionModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchSectionModel, label: "AdminBranchSectionModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranchGroups({ Model: AdminBranchGroupModel, label: "AdminBranchGroupnModel" }),
    ...validatorUtility.cBranches({ Model: AdminBranchModel, label: "AdminBranchModel" }),
    ...validatorUtility.idParam({ Model: AdminBranchSectionModel, label: "AdminBranchSectionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminBranchSectionModel, label: "AdminBranchSectionModel" })
  ],
};

export default adminBranchSectionValidation;
