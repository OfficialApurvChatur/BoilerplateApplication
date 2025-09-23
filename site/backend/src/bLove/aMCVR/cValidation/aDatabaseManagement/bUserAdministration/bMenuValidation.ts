import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { MenuModel } from '../../../aModel/aDatabaseManagement/bUserAdministration/bMenuModel';
import { AccessPointModel } from "../../../aModel/aDatabaseManagement/bUserAdministration/aAccessPointModel";


const menuValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: MenuModel, label: "MenuModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cAccessPoint({ Model: AccessPointModel, label: "AccessPointModel" }),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: MenuModel, label: "MenuModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: MenuModel, label: "MenuModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.cAccessPoint({ Model: AccessPointModel, label: "AccessPointModel" }),
    ...validatorUtility.idParam({ Model: MenuModel, label: "MenuModel" }),
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: MenuModel, label: "MenuModel" })
  ],

  listMini: () => [],
};

export default menuValidation;
