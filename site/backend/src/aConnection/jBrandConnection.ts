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
  qBackendProductionURL: "https://beehive-backend-dev.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? [ this.tFrontendProductionURL1, this.tFrontendProductionURL2 ]
      : [ this.sFrontendLocalURL1, this.sFrontendLocalURL2 ];
  },
  sFrontendLocalURL1: "http://localhost:5173",
  sFrontendLocalURL2: "http://localhost:5174",
  tFrontendProductionURL1: "https://beehive-admin-dev.netlify.app",
  tFrontendProductionURL2: "https://beehive-frontend-dev.netlify.app",

  uTagName: "Infinte Wonder Awaits",
}

export default brandConnection;
