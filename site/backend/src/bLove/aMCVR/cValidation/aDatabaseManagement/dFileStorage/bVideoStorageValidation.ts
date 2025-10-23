import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { VideoStorageModel } from '../../../aModel/aDatabaseManagement/dFileStorage/bVideoStorageModel';


const videoStorageValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: VideoStorageModel, label: "VideoStorageModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: VideoStorageModel, label: "VideoStorageModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: VideoStorageModel, label: "VideoStorageModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
    ...validatorUtility.idParam({ Model: VideoStorageModel, label: "VideoStorageModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: VideoStorageModel, label: "VideoStorageModel" })
  ],

  
  singleVideoCreate: () => [],
  
  singleVideoUpdate: () => [],

  singleVideoDelete: () => [],
};

export default videoStorageValidation;
