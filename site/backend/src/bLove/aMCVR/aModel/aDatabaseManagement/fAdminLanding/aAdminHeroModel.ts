import mongoose from "mongoose";
import slugify from "slugify";

import brandConnection from "../../../../../aConnection/jBrandConnection";
import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AdminHeroModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dTag?: string;
  dSocialLinks?: {
    aLinkTitle?: string;
    bLinkURL?: string;
  }[];
  dWebLinks?: {
    aLinkTitle?: string;
    bLinkURL?: string;
  }[];
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AdminHeroModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  // ...

  // D. MoreInfo Schema
  dTag: { 
    type: String,
    trim: true,
    default: "αβγδεζηθικλμνξοπρστυφχψω"
  },
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
          default: brandConnection.jInstagramURL, // 👈 default link url
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
    ], // 👈 default social link
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
    ], // 👈 default web link
  },
  
  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AdminHeroModelType> )

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

export const AdminHeroModel = mongoose.model<AdminHeroModelType>("AdminHeroModel", schema);
