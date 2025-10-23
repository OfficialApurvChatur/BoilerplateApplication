import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminBranchGroupModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/iAdminBranchGroupModel";
import { AdminBranchModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/jAdminBranchModel";


const adminBranchGroupValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchGroupModel, label: "AdminBranchGroupModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranches({ Model: AdminBranchModel, label: "AdminBranchModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminBranchGroupModel, label: "AdminBranchGroupModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchGroupModel, label: "AdminBranchGroupModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranches({ Model: AdminBranchModel, label: "AdminBranchModel" }),
    ...validatorUtility.idParam({ Model: AdminBranchGroupModel, label: "AdminBranchGroupModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminBranchGroupModel, label: "AdminBranchGroupModel" })
  ],

  listMini: () => [],
};

export default adminBranchGroupValidation;
