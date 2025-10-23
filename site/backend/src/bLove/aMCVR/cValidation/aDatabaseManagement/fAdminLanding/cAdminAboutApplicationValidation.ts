import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminAboutApplicationModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationModel';


const adminAboutApplicationValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminAboutApplicationModel, label: "AdminAboutApplicationModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTechIcon(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminAboutApplicationModel, label: "AdminAboutApplicationModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminAboutApplicationModel, label: "AdminAboutApplicationModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTechIcon(),
    ...validatorUtility.idParam({ Model: AdminAboutApplicationModel, label: "AdminAboutApplicationModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminAboutApplicationModel, label: "AdminAboutApplicationModel" })
  ],
};

export default adminAboutApplicationValidation;
