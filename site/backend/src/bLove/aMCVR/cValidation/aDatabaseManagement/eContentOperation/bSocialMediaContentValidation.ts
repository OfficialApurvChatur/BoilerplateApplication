import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { SocialMediaContentModel } from '../../../aModel/aDatabaseManagement/eContentOperation/bSocialMediaContentModel';


const socialMediaContentValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SocialMediaContentModel, label: "SocialMediaContentModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: SocialMediaContentModel, label: "SocialMediaContentModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: SocialMediaContentModel, label: "SocialMediaContentModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: SocialMediaContentModel, label: "SocialMediaContentModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: SocialMediaContentModel, label: "SocialMediaContentModel" })
  ],
};

export default socialMediaContentValidation;
