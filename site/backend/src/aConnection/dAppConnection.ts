import express from "express";
import bodyParserMiddleware from "body-parser";
import cookieParserMiddleware from "cookie-parser";
import corsMiddleware from "cors";
import compressionMiddleware from "compression";

import loggerConnection from "./bLoggerConnection";

import errorMiddleware from "../bLove/bMiddleware/aErrorMiddleware";
import morganMiddleware from "../bLove/bMiddleware/jMorganMiddleware";

import { baseRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/aSetting/aBaseRoute";
import { activityLogRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/aSetting/cActivityLogRoute";
import { apiLogRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/aSetting/bAPILogRoute";

import { accessPointRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/aAccessPointRoute";
import { menuRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/bMenuRoute";
import { permissionRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/cPermissionRoute";
import { roleRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/dRoleRoute";
import { userRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/eUserRoute";
import { profileRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/fProfileRoute";
import { accountRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/bUserAdministration/gAccountRoute";

import { signInRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/cUserAuthentication/aSignInRoute";
import { signUpRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/cUserAuthentication/bSignUpRoute";
import { signOutRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/cUserAuthentication/cSignOutRoute";
import { forgotPasswordRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/cUserAuthentication/dForgotPasswordRoute";
import { resetPasswordRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/cUserAuthentication/eResetPasswordRoute";

import { imageStorageRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/dFileStorage/aImageStorageRoute";
import { videoStorageRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/dFileStorage/bVideoStorageRoute";
import { audioStorageRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/dFileStorage/cAudioStorageRoute";

import { staticContentRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/eContentOperation/aStaticContentRoute";
import { socialMediaContentRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/eContentOperation/bSocialMediaContentRoute";

import { adminHeroRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/aAdminHeroRoute";
import { adminAboutCompanyRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyRoute";
import { adminAboutApplicationRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationRoute";
import { adminContactFormRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/dAdminContactFormRoute";
import { adminContactInfoRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/eAdminContactInfoRoute";
import { adminCounterRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/fAdminCounterRoute";
import { adminServiceRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/gAdminServiceRoute";
import { adminBranchSectionRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/hAdminBranchSectionRoute";
import { adminBranchGroupRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/iAdminBranchGroupRoute";
import { adminBranchRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/jAdminBranchRoute";
import { adminProjectSectionRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/kAdminProjectSectionRoute";
import { adminProjectGroupRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/lAdminProjectGroupRoute";
import { adminProjectRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/mAdminProjectRoute";

import { heroRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/aHeroRoute";
import { aboutCompanyRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/bAboutCompanyRoute";
import { aboutApplicationRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/cAboutApplicationRoute";
import { contactFormRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/dContactFormRoute";
import { contactInfoRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/eContactInfoRoute";
import { counterRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/fCounterRoute";
import { serviceRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/gServiceRoute";
import { branchSectionRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/hBranchSectionRoute";
import { branchGroupRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/iBranchGroupRoute";
import { branchRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/jBranchRoute";
import { projectSectionRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/kProjectSectionRoute";
import { projectGroupRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/lProjectGroupRoute";
import { projectRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/mProjectRoute";

import { chatRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/hChatManagement/aChatRoute";
import { messageRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/hChatManagement/bMessageRoute";
import { requestRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/hChatManagement/cRequestRoute";

import { adminHomePageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/aAdminHomePageRoute";
import { adminAboutCompanyPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/bAdminAboutCompanyPageRoute";
import { adminAboutApplicationPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/cAdminAboutApplicationPageRoute";
import { adminContactPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/dAdminContactPageRoute";
import { adminServicePageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/eAdminServicePageRoute";
import { adminBranchSectionPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/fAdminBranchSectionPageRoute";
import { adminBranchGroupPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/gAdminBranchGroupPageRoute";
import { adminBranchPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/hAdminBranchPageRoute";
import { adminProjectSectionPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/iAdminProjectSectionPageRoute";
import { adminProjectGroupPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/jAdminProjectGroupPageRoute";
import { adminProjectPageRoute } from "../bLove/aMCVR/dRoute/bAdminManagement/kAdminProjectPageRoute";
import brandConnection from "./jBrandConnection";


loggerConnection().info({ 
  message: "✅ Great... App Connected",
});

const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware);
appConnection.use(corsMiddleware({
  origin: [brandConnection.rFrontendBaseURL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
// appConnection.get("/", (_request: express.Request, response: express.Response) => {
//   response.send(`Welcome to ${process.env.APPLICATION}`)
// })
appConnection.use(express.static("public"));

appConnection.get("/ping", (_request: express.Request, response: express.Response) => {
  response.send("pong");
})

appConnection.use("/api/v1/base/", baseRoute);
appConnection.use("/api/v1/activity-log/", activityLogRoute);
appConnection.use("/api/v1/api-log/", apiLogRoute);

appConnection.use("/api/v1/access-point/", accessPointRoute);
appConnection.use("/api/v1/menu/", menuRoute);
appConnection.use("/api/v1/permission/", permissionRoute);
appConnection.use("/api/v1/role/", roleRoute);
appConnection.use("/api/v1/user/", userRoute);
appConnection.use("/api/v1/profile/", profileRoute);
appConnection.use("/api/v1/account/", accountRoute);

appConnection.use("/api/v1/sign-in/", signInRoute);
appConnection.use("/api/v1/sign-up/", signUpRoute);
appConnection.use("/api/v1/sign-out/", signOutRoute);
appConnection.use("/api/v1/forgot-password/", forgotPasswordRoute);
appConnection.use("/api/v1/reset-password/", resetPasswordRoute);

appConnection.use("/api/v1/image-storage/", imageStorageRoute);
appConnection.use("/api/v1/video-storage/", videoStorageRoute);
appConnection.use("/api/v1/audio-storage/", audioStorageRoute);

appConnection.use("/api/v1/static-content/", staticContentRoute);
appConnection.use("/api/v1/social-media-content/", socialMediaContentRoute);

appConnection.use("/api/v1/admin-hero/", adminHeroRoute);
appConnection.use("/api/v1/admin-about-company/", adminAboutCompanyRoute);
appConnection.use("/api/v1/admin-about-application/", adminAboutApplicationRoute);
appConnection.use("/api/v1/admin-contact-form/", adminContactFormRoute);
appConnection.use("/api/v1/admin-contact-info/", adminContactInfoRoute);
appConnection.use("/api/v1/admin-counter/", adminCounterRoute);
appConnection.use("/api/v1/admin-service/", adminServiceRoute);
appConnection.use("/api/v1/admin-branch-section/", adminBranchSectionRoute);
appConnection.use("/api/v1/admin-branch-group/", adminBranchGroupRoute);
appConnection.use("/api/v1/admin-branch/", adminBranchRoute);
appConnection.use("/api/v1/admin-project-section/", adminProjectSectionRoute);
appConnection.use("/api/v1/admin-project-group/", adminProjectGroupRoute);
appConnection.use("/api/v1/admin-project/", adminProjectRoute);

appConnection.use("/api/v1/hero/", heroRoute);
appConnection.use("/api/v1/about-company/", aboutCompanyRoute);
appConnection.use("/api/v1/about-application/", aboutApplicationRoute);
appConnection.use("/api/v1/contact-form/", contactFormRoute);
appConnection.use("/api/v1/contact-info/", contactInfoRoute);
appConnection.use("/api/v1/counter/", counterRoute);
appConnection.use("/api/v1/service/", serviceRoute);
appConnection.use("/api/v1/branch-section/", branchSectionRoute);
appConnection.use("/api/v1/branch-group/", branchGroupRoute);
appConnection.use("/api/v1/branch/", branchRoute);
appConnection.use("/api/v1/project-section/", projectSectionRoute);
appConnection.use("/api/v1/project-group/", projectGroupRoute);
appConnection.use("/api/v1/project/", projectRoute);

appConnection.use("/api/v1/chat/", chatRoute);
appConnection.use("/api/v1/message/", messageRoute);
appConnection.use("/api/v1/request/", requestRoute);

appConnection.use("/api/v1/admin-home-page/", adminHomePageRoute);
appConnection.use("/api/v1/admin-about-company-page/", adminAboutCompanyPageRoute);
appConnection.use("/api/v1/admin-about-application-page/", adminAboutApplicationPageRoute);
appConnection.use("/api/v1/admin-contact-page/", adminContactPageRoute);
appConnection.use("/api/v1/admin-service-page/", adminServicePageRoute);
appConnection.use("/api/v1/admin-branch-section-page/", adminBranchSectionPageRoute);
appConnection.use("/api/v1/admin-branch-group-page/", adminBranchGroupPageRoute);
appConnection.use("/api/v1/admin-branch-page/", adminBranchPageRoute);
appConnection.use("/api/v1/admin-project-section-page/", adminProjectSectionPageRoute);
appConnection.use("/api/v1/admin-project-group-page/", adminProjectGroupPageRoute);
appConnection.use("/api/v1/admin-project-page/", adminProjectPageRoute);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
