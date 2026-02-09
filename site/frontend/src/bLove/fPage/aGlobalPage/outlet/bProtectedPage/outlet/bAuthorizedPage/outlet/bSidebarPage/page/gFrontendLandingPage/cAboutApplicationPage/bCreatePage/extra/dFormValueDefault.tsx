import brandConnection from "@/aConnection/eBrandConnection";

const formValueDefault = ({
  aImage: "",
  aTitle: "",
  aSubtitle: "",
  aDescription: "",
  aDetail: "",
  aStatus: "",
  aState: "",

  dTechIcon: [
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
  ],
  dWebLinks: [
    {
      aLinkTitle: "Visit Application",
      bLinkURL: brandConnection.fFrontendApplicationURL,
    },
    {
      aLinkTitle: "Visit Administration",
      bLinkURL: brandConnection.gAdminApplicationURL,
    },
    {
      aLinkTitle: "Visit Codebase",
      bLinkURL: brandConnection.nGithubURL
    },
  ],
  dGalleryImages: [""],
})

export default formValueDefault;
