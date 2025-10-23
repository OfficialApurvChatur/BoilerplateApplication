import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ProjectModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/mProjectModel";


const projectValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectModel, label: "ProjectModel", mode: "create" }),
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
    ...validatorUtility.idParam({ Model: ProjectModel, label: "ProjectModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectModel, label: "ProjectModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.dGalleryImages(),
    ...validatorUtility.idParam({ Model: ProjectModel, label: "ProjectModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ProjectModel, label: "ProjectModel" })
  ],

  listMini: () => [],
};

export default projectValidation;
