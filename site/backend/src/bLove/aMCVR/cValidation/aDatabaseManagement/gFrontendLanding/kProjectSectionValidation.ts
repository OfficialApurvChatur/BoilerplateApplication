import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ProjectSectionModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/kProjectSectionModel";
import { ProjectGroupModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/lProjectGroupModel";
import { ProjectModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/mProjectModel";


const projectSectionValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectSectionModel, label: "ProjectSectionModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjectGroups({ Model: ProjectGroupModel, label: "ProjectGroupModel" }),
    ...validatorUtility.cProjects({ Model: ProjectModel, label: "ProjectModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ProjectSectionModel, label: "ProjectSectionModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ProjectSectionModel, label: "ProjectSectionModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cProjectGroups({ Model: ProjectGroupModel, label: "ProjectGroupModel" }),
    ...validatorUtility.cProjects({ Model: ProjectModel, label: "ProjectModel" }),
    ...validatorUtility.idParam({ Model: ProjectSectionModel, label: "ProjectSectionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ProjectSectionModel, label: "ProjectSectionModel" })
  ],
};

export default projectSectionValidation;
