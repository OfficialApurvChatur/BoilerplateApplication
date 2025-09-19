import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminContactFormModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/dAdminContactFormModel';


const adminContactFormValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminContactFormModel, label: "AdminContactFormModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminContactFormModel, label: "AdminContactFormModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminContactFormModel, label: "AdminContactFormModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: AdminContactFormModel, label: "AdminContactFormModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminContactFormModel, label: "AdminContactFormModel" })
  ],
};

export default adminContactFormValidation;
