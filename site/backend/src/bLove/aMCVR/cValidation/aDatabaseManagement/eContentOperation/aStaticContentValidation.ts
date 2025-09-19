import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { StaticContentModel } from '../../../aModel/aDatabaseManagement/eContentOperation/aStaticContentModel';


const staticContentValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: StaticContentModel, label: "StaticContentModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: StaticContentModel, label: "StaticContentModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: StaticContentModel, label: "StaticContentModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: StaticContentModel, label: "StaticContentModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: StaticContentModel, label: "StaticContentModel" })
  ],
};

export default staticContentValidation;
