const brandConnection = {
  aBrandID: "boilerplate",
  bBrandName: "Boilerplate",

  cFrontendApplicationName: "Boilerplate Frontend",
  dAdministrationApplicationName: "Boilerplate Administration",
  eBackendApplicationName: "Boilerplate Backend",

  fFrontendApplicationURL: "beehive-frontend.netlify.app",
  gAdminApplicationURL: "beehive-admin.netlify.app",
  hBackendApplicationURL: "beehive-backend.netlify.app",

  iEmailName: "@boilerplate.com",

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
  qBackendProductionURL: "https://backend-for-boilerplate-application.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.tFrontendProductionURL
      : this.sFrontendLocalURL;
  },
  sFrontendLocalURL: "http://localhost:5173",
  tFrontendProductionURL: "https://boilerplate-frontend-new.netlify.app",

}

export default brandConnection;
