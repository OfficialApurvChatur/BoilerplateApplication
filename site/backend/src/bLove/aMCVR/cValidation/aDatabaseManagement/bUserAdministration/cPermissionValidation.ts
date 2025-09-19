import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { PermissionModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/cPermissionModel';


const permissionValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: PermissionModel, label: "PermissionModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: PermissionModel, label: "PermissionModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: PermissionModel, label: "PermissionModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: PermissionModel, label: "PermissionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: PermissionModel, label: "PermissionModel" })
  ],
};

export default permissionValidation;
