import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type APILogModelType = DefaultSchemaUtilityType & {
  // Extra Info Type
  dIP?: string
  dCity?: string
  dCountry?: string
  dMethod?: string
  dURL?: string
  dStatus?: string
  dResponseTime?: string
  dTimestamp?: string

}

const schema = new mongoose.Schema<APILogModelType>({
  ...DefaultSchemaUtility.obj,

  // Extra Info
  dIP: { type: String },
  dCity: { type: String },
  dCountry: { type: String },
  dMethod: { type: String },
  dURL: { type: String },
  dStatus: { type: String },
  dResponseTime: { type: String },
  dTimestamp: { type: String },

} as mongoose.SchemaDefinition<APILogModelType> )

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

export const APILogModel = mongoose.model<APILogModelType>("APILogModel", schema);
