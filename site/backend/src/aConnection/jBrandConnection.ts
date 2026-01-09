const brandConnection = {
  aBrandID: "beehive-corporation",
  bBrandName: "Beehive Corporation",

  cFrontendApplicationName: "Beehive Frontend",
  dAdministrationApplicationName: "Beehive Administration",
  eBackendApplicationName: "Beehive Backend",

  fFrontendApplicationURL: "https://beehive-frontend.netlify.app",
  gAdminApplicationURL: "https://beehive-admin.netlify.app",
  hBackendApplicationURL: "https://beehive-backend.netlify.app",

  iEmailName: "@beehive.com",

  jInstagramURL: "https://www.instagram.com/beehive.corporation/",
  kXURL: "https://x.com/beehive_corp",
  lThreadsURL: "https://www.threads.com/@beehive.corporation",
  mLinkedinURL: "https://www.linkedin.com/in/beehive-corporation-74893b2a7/",
  nGithubURL: "https://github.com/ApurvChatur/ArionApplication?tab=readme-ov-file#administration-installation/",

  get oBackendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "https://beehive-backend-v02.onrender.com",

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

  uTagName: "Infinte Wonder Awaits",
}

export default brandConnection;
