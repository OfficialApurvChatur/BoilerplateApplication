import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ImageStorageModel } from '../../../aModel/aDatabaseManagement/dFileStorage/aImageStorageModel';


const imageStorageValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ImageStorageModel, label: "ImageStorageModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ImageStorageModel, label: "ImageStorageModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ImageStorageModel, label: "ImageStorageModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
    ...validatorUtility.idParam({ Model: ImageStorageModel, label: "ImageStorageModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ImageStorageModel, label: "ImageStorageModel" })
  ],

  singleImageCreate: () => [],
  
  singleImageUpdate: () => [],

  singleImageDelete: () => [],
};

export default imageStorageValidation;
