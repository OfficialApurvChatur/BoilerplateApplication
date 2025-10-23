import mongoose, { Types } from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type ProjectSectionModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cProjectGroups: Types.ObjectId[];
  cProjects: Types.ObjectId[];
  // D. MoreInfo Type
  // ...
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<ProjectSectionModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cProjectGroups: {
    type: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'AdminProjectGroupModel' 
      }
    ],
    default: [] // 👈 default project groups
  },
  cProjects: {
    type: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'AdminProjectModel' 
      }
    ],
    default: [] // 👈 default projects
  },

  // D. MoreInfo Schema
  // ...

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<ProjectSectionModelType> )

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

export const ProjectSectionModel = mongoose.model<ProjectSectionModelType>("ProjectSectionModel", schema);
