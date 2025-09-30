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

import { staticContentRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/eContentOperation/aStaticContentRoute";
import { socialMediaContentRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/eContentOperation/bSocialMediaContentRoute";

import { adminHeroRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/aAdminHeroRoute";
import { adminAboutCompanyRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/bAdminAboutCompanyRoute";
import { adminAboutApplicationRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/cAdminAboutApplicationRoute";
import { adminContactFormRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/dAdminContactFormRoute";
import { adminContactInfoRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/fAdminLanding/eAdminContactInfoRoute";

import { heroRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/aHeroRoute";
import { aboutCompanyRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/bAboutCompanyRoute";
import { aboutApplicationRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/cAboutApplicationRoute";
import { contactFormRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/dContactFormRoute";
import { contactInfoRoute } from "../bLove/aMCVR/dRoute/aDatabaseManagement/gFrontendLanding/eContactInfoRoute";


loggerConnection().info({ 
  message: "✅ Great... App Connected",
});

const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware);
appConnection.use(corsMiddleware({
  origin: ["http://localhost:5173"]
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request: express.Request, response: express.Response) => {
  response.send(`Welcome to ${process.env.APPLICATION}`)
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

appConnection.use("/api/v1/static-content/", staticContentRoute);
appConnection.use("/api/v1/social-media/", socialMediaContentRoute);

appConnection.use("/api/v1/admin-hero/", adminHeroRoute);
appConnection.use("/api/v1/admin-about-company/", adminAboutCompanyRoute);
appConnection.use("/api/v1/admin-about-application/", adminAboutApplicationRoute);
appConnection.use("/api/v1/admin-contact-form/", adminContactFormRoute);
appConnection.use("/api/v1/admin-contact-info/", adminContactInfoRoute);

appConnection.use("/api/v1/hero/", heroRoute);
appConnection.use("/api/v1/about-company/", aboutCompanyRoute);
appConnection.use("/api/v1/about-application/", aboutApplicationRoute);
appConnection.use("/api/v1/contact-form/", contactFormRoute);
appConnection.use("/api/v1/contact-info/", contactInfoRoute);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
