import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { AudioStorageModel } from "../../../aModel/aDatabaseManagement/dFileStorage/cAudioStorageModel";


const audioStorageValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AudioStorageModel, label: "AudioStorageModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: AudioStorageModel, label: "AudioStorageModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: AudioStorageModel, label: "AudioStorageModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.dStorageURL(),
    ...validatorUtility.idParam({ Model: AudioStorageModel, label: "AudioStorageModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: AudioStorageModel, label: "AudioStorageModel" })
  ],

  
  singleAudioCreate: () => [],
  
  singleAudioUpdate: () => [],

  singleAudioDelete: () => [],
};

export default audioStorageValidation;
