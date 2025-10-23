import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AboutCompanyModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/bAboutCompanyModel";


const aboutCompanyValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AboutCompanyModel, label: "AboutCompanyModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag2(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AboutCompanyModel, label: "AboutCompanyModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AboutCompanyModel, label: "AboutCompanyModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag2(),
    ...validatorUtility.idParam({ Model: AboutCompanyModel, label: "AboutCompanyModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AboutCompanyModel, label: "AboutCompanyModel" })
  ],
};

export default aboutCompanyValidation;
