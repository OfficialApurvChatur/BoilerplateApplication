import mongoose from "mongoose";
import slugify from "slugify";

import brandConnection from "../../../../../aConnection/jBrandConnection";
import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AdminProjectModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dSocialLinks?: {
    aLinkTitle?: string;
    bLinkURL?: string;
  }[];
  dWebLinks?: {
    aLinkTitle?: string;
    bLinkURL?: string;
  }[];
  dGalleryImages: string[];
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AdminProjectModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  // ...

  // D. MoreInfo Schema
  dSocialLinks: {
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
  dWebLinks: {
    type: [
      {
        aLinkTitle: {
          type: String,
          trim: true,
          default: 'Visit XXX', // 👈 default link tilte
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
        aLinkTitle: 'Visit Application',
        bLinkURL: brandConnection.fFrontendApplicationURL,
      },
      {
        aLinkTitle: 'Visit Administration',
        bLinkURL: brandConnection.gAdminApplicationURL,
      },
      {
        aLinkTitle: 'Visit Codebase',
        bLinkURL: 'https://github.com/OfficialApurvChatur/',
      },
    ], // 👈 default example link
  },
  dGalleryImages: {
    type: [
      { 
        type: String, 
        trim: true 
      }
    ],
    default: [], // 👈 default gallery images
  },

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AdminProjectModelType> )

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

export const AdminProjectModel = mongoose.model<AdminProjectModelType>("AdminProjectModel", schema);
