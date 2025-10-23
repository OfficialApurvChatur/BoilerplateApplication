import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminBranchModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/jAdminBranchModel";


const adminBranchValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchModel, label: "AdminBranchModel", mode: "create" }),
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
    ...validatorUtility.idParam({ Model: AdminBranchModel, label: "AdminBranchModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminBranchModel, label: "AdminBranchModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.dGalleryImages(),
    ...validatorUtility.idParam({ Model: AdminBranchModel, label: "AdminBranchModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminBranchModel, label: "AdminBranchModel" })
  ],

  listMini: () => [],
};

export default adminBranchValidation;
