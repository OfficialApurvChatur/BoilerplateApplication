import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { PermissionModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/cPermissionModel';
import { MenuModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/bMenuModel";
import { AccessPointModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/aAccessPointModel";


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
    ...validatorUtility.cMenu({ Model: MenuModel, label: "MenuModel", ExtraModel: AccessPointModel, extraLabel: "AccessPointModel" }),
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
    ...validatorUtility.cMenu({ Model: MenuModel, label: "MenuModel", ExtraModel: AccessPointModel, extraLabel: "AccessPointModel" }),
    ...validatorUtility.idParam({ Model: PermissionModel, label: "PermissionModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: PermissionModel, label: "PermissionModel" })
  ],

  listMini: () => [],
};

export default permissionValidation;
