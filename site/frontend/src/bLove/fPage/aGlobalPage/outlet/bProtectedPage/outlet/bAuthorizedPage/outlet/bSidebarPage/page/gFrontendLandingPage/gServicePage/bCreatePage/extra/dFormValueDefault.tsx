import brandConnection from "@/aConnection/eBrandConnection";


const formValueDefault = ({
  aImage: "",
  aTitle: "",
  aSubtitle: "",
  aDescription: "",
  aDetail: "",
  aStatus: "",
  aState: "",

  dLinks: [
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
})

export default formValueDefault;
