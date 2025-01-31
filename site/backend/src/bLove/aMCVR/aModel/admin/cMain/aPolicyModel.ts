import mongoose from 'mongoose';
import slugify from 'slugify';

import { DefaultSchemaUtility, DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type PolicyModelType = DefaultSchemaUtilityType & {
  // Relation Info Type

  // More Info Type
  dPolicyNumber: string
  dPolicyType: string
  dPolicyStartDate: Date
  dPolicyEndDate: Date
  dPremiumAmount: number
  dDeductibleAmount: number
  dCoverageDetails: string
}

const schema = new mongoose.Schema<PolicyModelType>({
  ...DefaultSchemaUtility.obj,

  // Relation Info
  cPolicyHolderId: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyHolder' },

  // More Info
  dPolicyNumber: { type: String, unique: true },
  dPolicyType: { type: String, trim: true },
  dPolicyStartDate: { type: Date },
  dPolicyEndDate: { type: Date },
  dPremiumAmount: { type: Number },
  dDeductibleAmount: { type: Number },
  dCoverageDetails: { type: String, trim: true }

} as mongoose.SchemaDefinition<PolicyModelType> )

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

export const PolicyModel = mongoose.model<PolicyModelType>("PolicyModel", schema);
