import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminProjectModel } from "../../../aModel/aDatabaseManagement/fAdminLanding/mAdminProjectModel";


const adminProjectValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectModel, label: "AdminProjectModel", mode: "create" }),
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
    ...validatorUtility.idParam({ Model: AdminProjectModel, label: "AdminProjectModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminProjectModel, label: "AdminProjectModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.dGalleryImages(),
    ...validatorUtility.idParam({ Model: AdminProjectModel, label: "AdminProjectModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminProjectModel, label: "AdminProjectModel" })
  ],

  listMini: () => [],
};

export default adminProjectValidation;
