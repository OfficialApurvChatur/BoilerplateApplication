import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AudioStorageModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dStorageURL?: string;
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AudioStorageModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  // ...

  // D. MoreInfo Schema
  dStorageURL: { 
    type: String,
    trim: true,
    default: 'https://res.cloudinary.com/dxej7qj3m/image/upload/v1754566938/Hero/trnikcsrmkn3yxmelwze.pdf', // 👈 default storage url
  },  

  // E. CriticalInfo Schema
  // ..

})

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

export const AudioStorageModel = mongoose.model<AudioStorageModelType>("AudioStorageModel", schema);
