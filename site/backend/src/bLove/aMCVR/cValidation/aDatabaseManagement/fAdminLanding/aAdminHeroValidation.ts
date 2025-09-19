import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminHeroModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/aAdminHeroModel';


const adminHeroValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminHeroModel, label: "AdminHeroModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminHeroModel, label: "AdminHeroModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminHeroModel, label: "AdminHeroModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AdminHeroModel, label: "AdminHeroModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminHeroModel, label: "AdminHeroModel" })
  ],
};

export default adminHeroValidation;
