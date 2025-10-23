import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { HeroModel } from "../../../aModel/aDatabaseManagement/gFrontendLanding/aHeroModel";


const heroValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: HeroModel, label: "HeroModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: HeroModel, label: "HeroModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: HeroModel, label: "HeroModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dTag(),
    ...validatorUtility.dSocialLinks(),
    ...validatorUtility.dWebLinks(),
    ...validatorUtility.idParam({ Model: HeroModel, label: "HeroModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: HeroModel, label: "HeroModel" })
  ],
};

export default heroValidation;
