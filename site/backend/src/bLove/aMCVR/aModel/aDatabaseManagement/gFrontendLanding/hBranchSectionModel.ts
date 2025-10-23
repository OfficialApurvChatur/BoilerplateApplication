import mongoose, { Types } from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type BranchSectionModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cBranchGroups: Types.ObjectId[];
  cBranches: Types.ObjectId[];
  // D. MoreInfo Type
  // ...
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<BranchSectionModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cBranchGroups: {
    type: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'AdminBranchGroupModel' 
      }
    ],
    default: [] // 👈 default branch groups
  },
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

} as mongoose.SchemaDefinition<BranchSectionModelType> )

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

export const BranchSectionModel = mongoose.model<BranchSectionModelType>("BranchSectionModel", schema);
