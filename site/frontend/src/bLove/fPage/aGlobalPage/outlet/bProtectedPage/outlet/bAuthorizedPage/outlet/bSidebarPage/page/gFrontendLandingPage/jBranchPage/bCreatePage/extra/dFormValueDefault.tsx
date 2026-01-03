import brandConnection from "@/aConnection/eBrandConnection";


const formValueDefault = ({
  aImage: "",
  aTitle: "",
  aSubtitle: "",
  aDescription: "",
  aDetail: "",
  aStatus: "",
  aState: "",

  dSocialLinks: [
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
