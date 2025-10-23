import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ServiceModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/gServiceModel";


const serviceValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ServiceModel, label: "ServiceModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dLinks(),
    ...validatorUtility.dIcon(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ServiceModel, label: "ServiceModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ServiceModel, label: "ServiceModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dLinks(),
    ...validatorUtility.dIcon(),
    ...validatorUtility.idParam({ Model: ServiceModel, label: "ServiceModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ServiceModel, label: "ServiceModel" })
  ],
};

export default serviceValidation;
