import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AdminAboutCompanyModel } from '../../../aModel/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyModel';


const adminAboutCompanyValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminAboutCompanyModel, label: "AdminAboutCompanyModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag2(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AdminAboutCompanyModel, label: "AdminAboutCompanyModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AdminAboutCompanyModel, label: "AdminAboutCompanyModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag2(),
    ...validatorUtility.idParam({ Model: AdminAboutCompanyModel, label: "AdminAboutCompanyModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AdminAboutCompanyModel, label: "AdminAboutCompanyModel" })
  ],
};

export default adminAboutCompanyValidation;
