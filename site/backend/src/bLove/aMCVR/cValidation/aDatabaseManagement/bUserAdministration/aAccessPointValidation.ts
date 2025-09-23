import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AccessPointModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/aAccessPointModel';


const accessPointValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AccessPointModel, label: "AccessPointModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AccessPointModel, label: "AccessPointModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AccessPointModel, label: "AccessPointModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AccessPointModel, label: "AccessPointModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AccessPointModel, label: "AccessPointModel" })
  ],

  listMini: () => [],
};

export default accessPointValidation;
