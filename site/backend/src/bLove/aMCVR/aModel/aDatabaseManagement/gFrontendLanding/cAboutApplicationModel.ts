import mongoose from "mongoose";
import slugify from "slugify";

import brandConnection from "../../../../../aConnection/jBrandConnection";
import defaultSchemaUtility, { DefaultSchemaUtilityType } from "../../../../cUtility/bDefaultSchemaUtility";


export type AboutApplicationModelType = DefaultSchemaUtilityType & {
  // A. BasicInfo Type - Done
  // B. PersonalInfo Type - Done
  // C. RelationInfo Type
  // ...
  // D. MoreInfo Type
  dTech: {
    aLabel: string;
    bValue: string;
  };
  dWebLinks?: {
    aLinkTitle?: string;
    bLinkURL?: string;
  }[];
  dGalleryImages: string[];
  // E. CriticalInfo Type
  // ..
}

const schema = new mongoose.Schema<AboutApplicationModelType>({
  // A. BasicInfo Schema - Done
  // B. PersonalInfo Schema - Done
  ...defaultSchemaUtility.obj,

  // C. RelationInfo Schema
  dTechIcon: {
    type: [
      {
        aIconLabel: { 
          type: String,
          trim: true,
          default: 'XXXX Icon', // 👈 default label
        },
        bIconValue: { 
          type: String,
          trim: true,
          default: 'XXXX Icon', // 👈 default value
        },  
      }
    ],
    default: [
      {
        aIconLabel: 'MongoDBIcon',
        bIconValue: 'MongoDB',
      },
      {
        aIconLabel: 'ExpressIcon',
        bIconValue: 'Express.js',
      },
      {
        aIconLabel: 'ReactIcon',
        bIconValue: 'React.js',
      },
      {
        aIconLabel: 'NodeIcon',
        bIconValue: 'Node.js',
      },
    ], // 👈 default tech
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

  // D. MoreInfo Schema
  // ...

  // E. CriticalInfo Schema
  // ..

} as mongoose.SchemaDefinition<AboutApplicationModelType> )

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

export const AboutApplicationModel = mongoose.model<AboutApplicationModelType>("AboutApplicationModel", schema);
