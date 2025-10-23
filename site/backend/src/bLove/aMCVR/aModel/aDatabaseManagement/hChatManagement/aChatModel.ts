import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";
import { Types } from "mongoose";


export type ChatModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cCreator: Types.ObjectId;
  cAdmin: Types.ObjectId;
  cMembers: Types.ObjectId[];
  // D. MoreInfo Type
  dIsGroupChat: boolean;
  //   // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<ChatModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  cAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  cMembers: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }],
    default: [], // 👈 default members
  },

  // D. MoreInfo Schema
  dIsGroupChat: {
    type: Boolean,
    default: false,
  },

  // D. MoreInfo Schema
  // ...

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<ChatModelType> )

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

export const ChatModel = mongoose.model<ChatModelType>("ChatModel", schema);
