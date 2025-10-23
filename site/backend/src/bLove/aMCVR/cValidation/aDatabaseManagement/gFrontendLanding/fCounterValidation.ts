import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { CounterModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/fCounterModel";


const counterValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: CounterModel, label: "CounterModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: CounterModel, label: "CounterModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: CounterModel, label: "CounterModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: CounterModel, label: "CounterModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: CounterModel, label: "CounterModel" })
  ],
};

export default counterValidation;
