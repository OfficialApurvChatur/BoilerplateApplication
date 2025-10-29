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
    return import.meta.env.VITE_ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "http://backend-for-boilerplate-application",

  get rFrontendBaseURL() {
    return import.meta.env.VITE_ENVIRONMENT === "Production"
      ? this.tFrontendProductionURL
      : this.sFrontendLocalURL;
  },
  sFrontendLocalURL: "http://localhost:5173",
  tFrontendProductionURL: "http://boilerplate-frontend",

}

export default brandConnection;
