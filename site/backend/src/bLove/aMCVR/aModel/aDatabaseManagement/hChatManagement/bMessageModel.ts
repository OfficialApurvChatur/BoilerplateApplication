import mongoose, { Types } from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type MessageModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cSender: Types.ObjectId; 
  cChat: Types.ObjectId;  
  // D. MoreInfo Type
  dAttachments: string[];
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<MessageModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cSender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
  },
  cChat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatModel',
    required: true,
  },

  // D. MoreInfo Schema
  dAttachments: {
    type: [
      { 
        type: String, 
        trim: true 
      }
    ],
    default: [], // 👈 default attachments
  },

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<MessageModelType> )

// Pre Create
schema.pre("save", function(next) {
  if (this.aTitle) {
    this.aSlug = slugify(this.aTitle, { lower: true, strict: true })
  }
  next();
})

// Pre Update
schema.pre("findOneAndUpdate", function(next) {
  const updatedData: any = this.getUpdate()
  if (updatedData?.aTitle) {
    updatedData.aSlug = slugify(updatedData.aTitle, { lower: true, strict: true })
    this.setUpdate(updatedData)
  }
  next();
})

export const MessageModel = mongoose.model<MessageModelType>("MessageModel", schema);
