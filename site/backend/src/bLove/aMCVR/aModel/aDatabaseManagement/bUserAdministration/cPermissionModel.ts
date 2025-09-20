import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type PermissionModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  cMenu?: {
    menu: mongoose.Types.ObjectId;
    access: {
      accessPoint: mongoose.Types.ObjectId;
      hasAccess: boolean;
    };
  }[];
  // ...
  // D. MoreInfo Type
  // ...
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<PermissionModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  cMenu: {
    type: [{
      menu: { type: mongoose.Schema.Types.ObjectId, ref: "MenuModel", required: true },
      access: [{
        accessPoint: { type: mongoose.Schema.Types.ObjectId, ref: "AccessPointModel" },
        hasAccess: Boolean,
      }],
    }],
  }

  // D. MoreInfo Schema
  // ...

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<PermissionModelType> )

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

export const PermissionModel = mongoose.model<PermissionModelType>("PermissionModel", schema);
