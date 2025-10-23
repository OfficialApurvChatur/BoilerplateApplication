import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { BranchGroupModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/iBranchGroupModel";
import { BranchModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/jBranchModel";


const branchGroupValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchGroupModel, label: "BranchGroupModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranches({ Model: BranchModel, label: "BranchModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: BranchGroupModel, label: "BranchGroupModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchGroupModel, label: "BranchGroupModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranches({ Model: BranchModel, label: "BranchModel" }),
    ...validatorUtility.idParam({ Model: BranchGroupModel, label: "BranchGroupModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: BranchGroupModel, label: "BranchGroupModel" })
  ],

  listMini: () => [],
};

export default branchGroupValidation;
