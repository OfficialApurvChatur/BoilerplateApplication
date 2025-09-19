import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { APILogModel } from '../../../aModel/aDatabaseManagement/aSetting/bAPILogModel';


const apiLogValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: APILogModel, label: "APILogModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: APILogModel, label: "APILogModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: APILogModel, label: "APILogModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: APILogModel, label: "APILogModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: APILogModel, label: "APILogModel" })
  ],
};

export default apiLogValidation;
