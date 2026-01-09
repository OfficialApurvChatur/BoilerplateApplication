const brandConnection = {
  aBrandID: "boilerplate",
  bBrandName: "Boilerplate",

  cFrontendApplicationName: "Boilerplate Frontend",
  dAdministrationApplicationName: "Boilerplate Administration",
  eBackendApplicationName: "Boilerplate Backend",

  fFrontendApplicationURL: "https://boilerplate-frontend-v02.netlify.app",
  gAdminApplicationURL: "https://boilerplate-admin-v02.netlify.app",
  hBackendApplicationURL: "https://boilerplate-backend-v02.netlify.app",

  iEmailName: "@boilerplate.com",

  jInstagramURL: "https://www.google.com/",
  kXURL: "https://www.google.com/",
  lThreadsURL: "https://www.google.com/",
  mLinkedinURL: "https://www.google.com/",
  nGithubURL: "https://www.google.com/",

  get oBackendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "https://boilerplate-backend-v02.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production" ? [ 
      this.tFrontendProductionURL1, 
      this.tFrontendProductionURL2, 
    ] : [ 
      this.sFrontendLocalURL1, 
      this.sFrontendLocalURL2,
      this.sFrontendLocalURL3,
      this.sFrontendLocalURL4,
      this.sFrontendLocalURL5,
      this.sFrontendLocalURL6,
      this.sFrontendLocalURL7,
      this.sFrontendLocalURL8,
      this.sFrontendLocalURL9,
    ];
  },
  sFrontendLocalURL1: "http://localhost:5173",
  sFrontendLocalURL2: "http://localhost:5174",
  sFrontendLocalURL3: "http://localhost:5175",
  sFrontendLocalURL4: "http://localhost:5176",
  sFrontendLocalURL5: "http://localhost:5177",
  sFrontendLocalURL6: "http://localhost:5178",
  sFrontendLocalURL7: "http://localhost:5179",
  sFrontendLocalURL8: "http://localhost:5180",
  sFrontendLocalURL9: "http://localhost:5181",
  tFrontendProductionURL1: "https://boilerplate-admin-v02.netlify.app",
  tFrontendProductionURL2: "https://boilerplate-frontend-v02.netlify.app",

  uTagName: "Skip setup. Start building.",
}

export default brandConnection;
