import validatorUtility from "../../../../cUtility/cValidatorUtility";
import { MessageModel } from "../../../aModel/aDatabaseManagement/hChatManagement/bMessageModel";


const messageValidation = {
  list: () => [],

  create: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: MessageModel, label: "MessageModel", mode: "create" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
  ],

  retrieve: () => [
    ...validatorUtility.idParam({ Model: MessageModel, label: "MessageModel" })
  ],

  update: () => [
    ...validatorUtility.aImage(),
    ...validatorUtility.aTitle({ Model: MessageModel, label: "MessageModel", mode: "update" }),
    ...validatorUtility.aSubtitle(),
    ...validatorUtility.aDescription(),
    ...validatorUtility.aDetail(),
    ...validatorUtility.aStatus(),
    ...validatorUtility.aState(),
    ...validatorUtility.idParam({ Model: MessageModel, label: "MessageModel" })
  ],

  delete: () => [
    ...validatorUtility.idParam({ Model: MessageModel, label: "MessageModel" })
  ],
};

export default messageValidation;
