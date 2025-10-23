import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ProjectGroupModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/lProjectGroupModel";
import { ProjectModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/mProjectModel";


const projectGroupValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectGroupModel, label: "ProjectGroupModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjects({ Model: ProjectModel, label: "ProjectModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ProjectGroupModel, label: "ProjectGroupModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectGroupModel, label: "ProjectGroupModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjects({ Model: ProjectModel, label: "ProjectModel" }),
    ...validatorUtility.idParam({ Model: ProjectGroupModel, label: "ProjectGroupModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ProjectGroupModel, label: "ProjectGroupModel" })
  ],

  listMini: () => [],
};

export default projectGroupValidation;
