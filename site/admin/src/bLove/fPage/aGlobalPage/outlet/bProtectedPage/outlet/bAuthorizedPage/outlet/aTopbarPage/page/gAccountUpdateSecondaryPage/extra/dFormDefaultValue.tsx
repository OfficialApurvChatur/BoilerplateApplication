import brandConnection from "@/aConnection/eBrandConnection";


const formDefaultValue = ({
  aImage: "",
  aTitle: "",
  aSubtitle: "",
  aDescription: "",
  aDetail: "",

  dAddress: {
    aLane: "",
    bStreet: "",
    cCity: "",
    dState: "",
    eCountry: "",
    fPinCode: "",
  },
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

  eImage: "",
  eFirstname: "",
  eLastname: "",
  eMobile: "",
})

export default formDefaultValue;
