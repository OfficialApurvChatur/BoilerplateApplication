import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { BranchModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/jBranchModel";


const branchValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchModel, label: "BranchModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.dGalleryImages(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: BranchModel, label: "BranchModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BranchModel, label: "BranchModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.dGalleryImages(),
    ...validatorUtility.idParam({ Model: BranchModel, label: "BranchModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: BranchModel, label: "BranchModel" })
  ],

  listMini: () => [],
};

export default branchValidation;
