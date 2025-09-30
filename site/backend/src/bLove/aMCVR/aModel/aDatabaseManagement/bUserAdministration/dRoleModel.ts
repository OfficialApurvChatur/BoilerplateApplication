import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type RoleModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cPermission?: mongoose.Types.ObjectId; 
  // D. MoreInfo Type
  // ...
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<RoleModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cPermission: { type: mongoose.Schema.Types.ObjectId, ref: "PermissionModel" },

  // D. MoreInfo Schema
  // ...

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

export const RoleModel = mongoose.model<RoleModelType>("RoleModel", schema);
