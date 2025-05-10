import express from 'express';

import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import compressionMiddleware from 'compression';

import errorMiddleware from '../bLove/bMiddleware/aErrorMiddleware';
import morganMiddleware from '../bLove/bMiddleware/iMorganMiddleware';

import { baseRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/aBaseRoute';
import { activityLogRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/bActivityLogRoute';
import { apiLogRouter } from '../bLove/aMCVR/dRoute/admin/aSetting/cAPILogRoute';

import { accessPointRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/aAccessPointRoute';
import { menuRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/bMenuRoute';
import { roleRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/cRoleRoute';
import { userAuthRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserAuthRoute';
import { userAccountRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserAccountRoute';
import { userRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/dUserRoute';
import { profileRouter } from '../bLove/aMCVR/dRoute/admin/bUserAdministration/eProfileRoute';

import { adminHeroRouter } from '../bLove/aMCVR/dRoute/admin/cAdminLanding/aAdminHeroRoute';
import { adminAboutCompanyRouter } from '../bLove/aMCVR/dRoute/admin/cAdminLanding/bAdminAboutCompanyRoute';
import { adminContactFormRouter } from '../bLove/aMCVR/dRoute/admin/cAdminLanding/cAdminContactFormRoute';

import { heroRouter } from '../bLove/aMCVR/dRoute/admin/dFrontendLanding/aHeroRoute';
import { aboutCompanyRouter } from '../bLove/aMCVR/dRoute/admin/dFrontendLanding/bAboutCompanyRoute';
import { contactFormRouter } from '../bLove/aMCVR/dRoute/admin/dFrontendLanding/cContactFormRoute';

import { adminHomePageRouter } from '../bLove/aMCVR/dRoute/adminNew/aAdminHomePageRoute';
import { adminAboutPageRouter } from '../bLove/aMCVR/dRoute/adminNew/bAdminAboutPageRoute';
import { adminContactPageRouter } from '../bLove/aMCVR/dRoute/adminNew/cAdminContactPageRoute';

import { homePageRouter } from '../bLove/aMCVR/dRoute/frontendNew/aHomePageRoute';
import { aboutPageRouter } from '../bLove/aMCVR/dRoute/frontendNew/bAboutPageRoute';
import { contactPageRouter } from '../bLove/aMCVR/dRoute/frontendNew/cContactPageRoute';

import { singleImageRouter } from '../bLove/aMCVR/dRoute/admin/zFreestyleSample/aSingleImageRoute';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware);
appConnection.use(corsMiddleware({ 
  origin: (
    process.env.ENVIRONMENT === "Production" ? [ String(process.env.FRONTEND_URL) ] :
    process.env.ENVIRONMENT === "Testing" ?  [ String(process.env.FRONTEND_URL) ] :
    process.env.ENVIRONMENT === "Development" ?  [ "http://localhost:5173", "http://localhost:5174" ] : 
    []
  ),
  credentials: true
}));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request, response) => { response.send(`Welcome to ${process.env.APPLICATION}`) })

appConnection.use("/api/v1/base/", baseRouter);
appConnection.use("/api/v1/activity-log/", activityLogRouter);
appConnection.use("/api/v1/api-log/", apiLogRouter);

appConnection.use("/api/v1/access-point/", accessPointRouter);
appConnection.use("/api/v1/menu/", menuRouter);
appConnection.use("/api/v1/role/", roleRouter);
appConnection.use("/api/v1/user/auth/", userAuthRouter);
appConnection.use("/api/v1/user/account/", userAccountRouter);
appConnection.use("/api/v1/user/", userRouter);
appConnection.use("/api/v1/profile/", profileRouter);

appConnection.use("/api/v1/admin-hero/", adminHeroRouter);
appConnection.use("/api/v1/admin-about-company/", adminAboutCompanyRouter);
appConnection.use("/api/v1/admin-contact-form/", adminContactFormRouter);

appConnection.use("/api/v1/hero/", heroRouter);
appConnection.use("/api/v1/about-company/", aboutCompanyRouter);
appConnection.use("/api/v1/contact-form/", contactFormRouter);

appConnection.use("/api/v1/admin-home-page/", adminHomePageRouter);
appConnection.use("/api/v1/admin-about-page/", adminAboutPageRouter);
appConnection.use("/api/v1/admin-contact-page/", adminContactPageRouter);

appConnection.use("/api/v1/home-page/", homePageRouter);
appConnection.use("/api/v1/about-page/", aboutPageRouter);
appConnection.use("/api/v1/contact-page/", contactPageRouter);

appConnection.use('/api/v1/single-image/', singleImageRouter);

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;
