import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { RoleModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/dRoleModel';
import { PermissionModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/cPermissionModel";


const roleValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: RoleModel, label: "RoleModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cPermission({ Model: PermissionModel, label: "PermissionModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: RoleModel, label: "RoleModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: RoleModel, label: "RoleModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cPermission({ Model: PermissionModel, label: "PermissionModel" }),
    ...validatorUtility.idParam({ Model: RoleModel, label: "RoleModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: RoleModel, label: "RoleModel" })
  ],

  listMini: () => [],
};

export default roleValidation;
