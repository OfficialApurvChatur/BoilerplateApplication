import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AdminHeroModelType = DefaultSchemaUtilityType & {
  // Relation Info Type
}

const schema = new mongoose.Schema<AdminHeroModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
} as mongoose.SchemaDefinition<AdminHeroModelType> )

// Pre Save
schema.pre("save", function(next) {
  this.aSlug = slugify(String(this?.aTitle), { lower: true, strict: true });
  next();
})

// Pre Update
schema.pre("findOneAndUpdate", function(next) {
  const update: any = this.getUpdate();

  if (update?.aTitle) {
    update.aSlug = slugify(String(update.aTitle), { lower: true, strict: true });
    this.setUpdate(update);
  }
  next();
})

export const AdminHeroModel = mongoose.model<AdminHeroModelType>("AdminHeroModel", schema);
