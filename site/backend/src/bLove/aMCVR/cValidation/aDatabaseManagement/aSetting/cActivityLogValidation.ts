import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ActivityLogModel } from '../../../aModel/aDatabaseManagement/aSetting/cActivityLogModel';


const activityLogValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ActivityLogModel, label: "ActivityLogModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ActivityLogModel, label: "ActivityLogModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ActivityLogModel, label: "ActivityLogModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ActivityLogModel, label: "ActivityLogModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ActivityLogModel, label: "ActivityLogModel" })
  ],
};

export default activityLogValidation;
