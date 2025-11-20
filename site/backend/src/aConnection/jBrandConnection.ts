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
  qBackendProductionURL: "https://booooooring-beehive-backend.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.tFrontendProductionURL
      : this.sFrontendLocalURL;
  },
  sFrontendLocalURL: "http://localhost:5173",
  tFrontendProductionURL: "https://beehive-corp-frontend.netlify.app",

  uTagName: "Infinte Wonder Awaits",
}

export default brandConnection;
