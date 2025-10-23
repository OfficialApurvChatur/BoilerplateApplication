import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ContactFormModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/dContactFormModel";


const contactFormValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ContactFormModel, label: "ContactFormModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ContactFormModel, label: "ContactFormModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ContactFormModel, label: "ContactFormModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ContactFormModel, label: "ContactFormModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ContactFormModel, label: "ContactFormModel" })
  ],
};

export default contactFormValidation;
