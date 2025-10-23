import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AboutApplicationModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/cAboutApplicationModel";


const aboutApplicationValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AboutApplicationModel, label: "AboutApplicationModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTechIcon(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AboutApplicationModel, label: "AboutApplicationModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AboutApplicationModel, label: "AboutApplicationModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTechIcon(),
    ...validatorUtility.idParam({ Model: AboutApplicationModel, label: "AboutApplicationModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AboutApplicationModel, label: "AboutApplicationModel" })
  ],
};

export default aboutApplicationValidation;
