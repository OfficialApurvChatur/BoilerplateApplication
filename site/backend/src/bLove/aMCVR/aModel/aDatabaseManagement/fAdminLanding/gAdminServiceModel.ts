import mongoose from "mongoose";
import slugify from "slugify";

import brandConnection from "../../../../../aConnection/jBrandConnection";
import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AdminServiceModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dLinks: {
    aLinkTitle: 'Instagram' | 'Twitter' | 'Linkedin' | 'Portfolio' | 'Other';
    bLinkURL: string;
  }[];
  dIcon: {
    aLabel: string;
    bValue: string;
  };
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AdminServiceModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  // ...

  // D. MoreInfo Schema
  dLinks: {
    type: [
      {
        aLinkTitle: {
          type: String,
          trim: true,
          default: 'Instagra:X:Threads:Linkedin:Github', // 👈 default link tilte
        },
        bLinkURL: { 
          type: String,
          trim: true,
          default: brandConnection.gAdminApplicationURL, // 👈 default link url
        },  
      }
    ],
    default: [
      {
        aLinkTitle: 'Instagram',
        bLinkURL: brandConnection.jInstagramURL,
      },
      {
        aLinkTitle: 'X',
        bLinkURL: brandConnection.kXURL,
      },
      {
        aLinkTitle: 'Threads',
        bLinkURL: brandConnection.lThreadsURL,
      }, 
      {
        aLinkTitle: 'Linkedin',
        bLinkURL: brandConnection.mLinkedinURL,
      }, 
      {
        aLinkTitle: 'Github',
        bLinkURL: brandConnection.nGithubURL,
      }, 
    ], // 👈 default example link
  },
  dIcon: {
    aIconLabel: { 
      type: String,
      trim: true,
      default: 'MongoDBIcon', // 👈 default label
    },
    bIconValue: { 
      type: String,
      trim: true,
      default: 'MongoDB', // 👈 default value
    },  
  },
  
  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AdminServiceModelType> )

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

export const AdminServiceModel = mongoose.model<AdminServiceModelType>("AdminServiceModel", schema);
