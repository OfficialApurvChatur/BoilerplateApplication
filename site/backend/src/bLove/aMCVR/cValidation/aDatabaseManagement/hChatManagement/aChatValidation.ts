import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { ChatModel } from "../../../aModel/aDatabaseManagement/hChatManagement/aChatModel";


const chatValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ChatModel, label: "ChatModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: ChatModel, label: "ChatModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: ChatModel, label: "ChatModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: ChatModel, label: "ChatModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: ChatModel, label: "ChatModel" })
  ],
};

export default chatValidation;
