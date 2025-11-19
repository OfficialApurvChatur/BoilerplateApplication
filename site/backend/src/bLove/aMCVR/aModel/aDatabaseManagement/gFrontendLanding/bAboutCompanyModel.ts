import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AboutCompanyModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dTag?: string;
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AboutCompanyModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  // ...
  
  // D. MoreInfo Schema
  dTag: { 
    type: String, 
    enum: ['truly', 'relatively'],
    default: "truly"  // 👈 default tag
  },

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AboutCompanyModelType> )

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

export const AboutCompanyModel = mongoose.model<AboutCompanyModelType>("AboutCompanyModel", schema);
