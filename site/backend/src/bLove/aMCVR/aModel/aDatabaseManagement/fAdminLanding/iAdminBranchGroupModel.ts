import mongoose, { Types } from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AdminBranchGroupModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cBranches: Types.ObjectId[];
  // D. MoreInfo Type
  // ...
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AdminBranchGroupModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cBranches: {
    type: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'AdminBranchModel' 
      }
    ],
    default: [] // 👈 default branch
  },
  
  // D. MoreInfo Schema
  // ...

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AdminBranchGroupModelType> )

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

export const AdminBranchGroupModel = mongoose.model<AdminBranchGroupModelType>("AdminBranchGroupModel", schema);
