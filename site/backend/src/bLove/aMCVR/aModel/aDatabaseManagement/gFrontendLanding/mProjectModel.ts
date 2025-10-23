import mongoose from "mongoose";
import slugify from "slugify";

import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type ProjectModelType = DefaultSchemaUtilityType & {
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

const schema = new mongoose.Schema<ProjectModelType>({
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
          default: 'https://beehive-admin.netlify.app/', // 👈 default link url
        },  
      }
    ],
    default: [
      {
        aLinkTitle: 'Instagram',
        bLinkURL: 'https://www.instagram.com/beehive.corporation/',
      },
      {
        aLinkTitle: 'X',
        bLinkURL: 'https://x.com/beehive_corp',
      },
      {
        aLinkTitle: 'Threads',
        bLinkURL: 'https://www.threads.com/@beehive.corporation',
      }, 
      {
        aLinkTitle: 'Linkedin',
        bLinkURL: 'https://www.linkedin.com/in/beehive-corporation-74893b2a7/',
      }, 
      {
        aLinkTitle: 'Github',
        bLinkURL: 'https://github.com/ApurvChatur/ArionApplication?tab=readme-ov-file#administration-installation/',
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
          default: 'https://beehive-admin.netlify.app/', // 👈 default link url
        },  
      }
    ],
    default: [
      {
        aLinkTitle: 'Visit Application',
        bLinkURL: 'https://beehive-frontend.netlify.app/',
      },
      {
        aLinkTitle: 'Visit Administration',
        bLinkURL: 'https://beehive-admin.netlify.app/',
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

} as mongoose.SchemaDefinition<ProjectModelType> )

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

export const ProjectModel = mongoose.model<ProjectModelType>("ProjectModel", schema);
