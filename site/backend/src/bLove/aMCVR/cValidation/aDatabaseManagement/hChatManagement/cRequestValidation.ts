import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { RequestModel } from "../../../aModel/aDatabaseManagement/hChatManagement/cRequestModel";


const requestValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: RequestModel, label: "RequestModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: RequestModel, label: "RequestModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: RequestModel, label: "RequestModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: RequestModel, label: "RequestModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: RequestModel, label: "RequestModel" })
  ],
};

export default requestValidation;
