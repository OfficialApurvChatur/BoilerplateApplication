import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ContactInfoModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/eContactInfoModel";


const contactInfoValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ContactInfoModel, label: "ContactInfoModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ContactInfoModel, label: "ContactInfoModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ContactInfoModel, label: "ContactInfoModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ContactInfoModel, label: "ContactInfoModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ContactInfoModel, label: "ContactInfoModel" })
  ],
};

export default contactInfoValidation;
