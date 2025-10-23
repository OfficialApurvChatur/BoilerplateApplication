import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { BranchSectionModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/hBranchSectionModel";
import { BranchGroupModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/iBranchGroupModel";
import { BranchModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/jBranchModel";


const branchSectionValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchSectionModel, label: "BranchSectionModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranchGroups({ Model: BranchGroupModel, label: "BranchGroupModel" }),
    ...validatorUtility.cBranches({ Model: BranchModel, label: "BranchModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: BranchSectionModel, label: "BranchSectionModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchSectionModel, label: "BranchSectionModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cBranchGroups({ Model: BranchGroupModel, label: "BranchGroupModel" }),
    ...validatorUtility.cBranches({ Model: BranchModel, label: "BranchModel" }),
    ...validatorUtility.idParam({ Model: BranchSectionModel, label: "BranchSectionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: BranchSectionModel, label: "BranchSectionModel" })
  ],
};

export default branchSectionValidation;
