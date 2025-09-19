import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { BaseModel } from '../../../aModel/aDatabaseManagement/aSetting/aBaseModel';


const baseValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BaseModel, label: "BaseModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: BaseModel, label: "BaseModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: BaseModel, label: "BaseModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: BaseModel, label: "BaseModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: BaseModel, label: "BaseModel" })
  ],
};

export default baseValidation;
