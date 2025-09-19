import mongoose from "mongoose";
import moment from "moment-timezone";


export type DefaultSchemaUtilityType = mongoose.Document & {
  // A. BasicInfo Type
  aImage       ?: string;
  aTitle       ?: string;
  aSubtitle    ?: string;
  aDescription ?: string;
  aDetail      ?: string;
  aStatus      ?: boolean;
  aState       ?: string;
  aSlug        ?: string;

  // B. PersonalInfo Type
  bCreatedAt   ?: Date;
  bUpdatedAt   ?: Date;
  bCreatedBy   ?: mongoose.Types.ObjectId;
  bUpdatedBy   ?: mongoose.Types.ObjectId;
}

const defaultSchemaUtility = new mongoose.Schema<DefaultSchemaUtilityType>({
  // A. BasicInfo Schema
  aImage       : { type: String,  trim: true },
  aTitle       : { type: String,  trim: true },
  aSubtitle    : { type: String,  trim: true },
  aDescription : { type: String,  trim: true },
  aDetail      : { type: String,  trim: true },
  aStatus      : { type: Boolean,            default: false },
  aState       : { type: String,  trim: true },
  aSlug        : { type: String,  trim: true },

  // B. PersonalInfo Schema
  bCreatedAt   : { type: Date, default: () => moment().tz("Asia/Kolkata").toDate() },
  bUpdatedAt   : { type: Date                                                      },
  bCreatedBy   : { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"          },
  bUpdatedBy   : { type: mongoose.Schema.Types.ObjectId, ref: "UserModel"          },
})

export default defaultSchemaUtility;
