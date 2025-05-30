import mongoose from 'mongoose';
import timezone from 'moment-timezone';


export type DefaultSchemaUtilityType = mongoose.Document & {
  aImage?: string;
  aTitle?: string;
  aSubtitle?: string;
  aDescription?: string;
  aDetail?: string;
  aStatus?: boolean;
  aState?: string;
  aSlug?: string;

  bCreatedAt?: Date;
  bUpdatedAt?: Date;
  bCreatedBy?: mongoose.Types.ObjectId;
  bUpdatedBy?: mongoose.Types.ObjectId;
}

const schema = new mongoose.Schema<DefaultSchemaUtilityType>({
  //  Basic Info
  aImage: { type: String, trim: true }, // Image String
  aTitle: { type: String, trim: true }, // Max 20
  aSubtitle: { type: String, trim: true }, // Max 50
  aDescription: { type: String, trim: true }, // Max 3000
  aDetail: { type: String, trim: true }, // Max 5000
  aStatus: { type: Boolean, default: false }, // True or False
  aState: { type: String, trim: true }, // State
  aSlug: { type: String, trim: true }, // Alternative ID

  // Personal Info
  bCreatedAt: { type: Date, default: timezone(Date.now()).tz("Asia/Kolkata") },
  bUpdatedAt: { type: Date },
  bCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  bUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
})

export const DefaultSchemaUtility = schema;
