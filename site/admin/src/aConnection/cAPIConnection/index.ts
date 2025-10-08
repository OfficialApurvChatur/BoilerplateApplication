import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: (
      import.meta.env.VITE_ENVIRONMENT === "Production" ? String(import.meta.env.VITE_BACKEND_URL) : 
      import.meta.env.VITE_ENVIRONMENT === "Testing" ? String(import.meta.env.VITE_BACKEND_URL) :
      import.meta.env.VITE_ENVIRONMENT === "Development" ? String(import.meta.env.VITE_BACKEND_URL) : 
      String(import.meta.env.VITE_BACKEND_URL)
    ),
    credentials: "include"
  }),
  tagTypes: [
    "adminHomePageList"        , 
    "adminAboutPageList"       , 
    "adminContactPageCreate"   ,

    "baseList"                 , "baseRetrieve"                 ,
    "activityLogList"          , "activityLogRetrieve"          ,
    "apiLogList"               , "apiLogRetrieve"               ,

    "accessPointList"          , "accessPointRetrieve"          , "accessPointListMini"   ,
    "menuList"                 , "menuRetrieve"                 , "menuListMini"          ,
    "permissionList"           , "permissionRetrieve"           , "permissionListMini"    ,
    "roleList"                 , "roleRetrieve"                 , "roleListMini"          , "roleUpdateRetrieve"   ,
    "userList"                 , "userRetrieve"                 , "userListMini"          ,
    "profileList"              , "profileRetrieve"              , "profileListMini"       ,
    "accountList"              , "accountRetrieve"              ,

    "signInList"               , "signInRetrieve"               ,
    "signUpList"               , "signUpRetrieve"               ,
    "signOutList"              , "signOutRetrieve"              ,
    "forgotPasswordList"       , "forgotPasswordRetrieve"       ,
    "resetPasswordList"        , "resetPasswordRetrieve"        ,

    "imageStorageList"         , "imageStorageRetrieve"         ,
    "videoStorageList"         , "videoStorageRetrieve"         ,

    "staticContentList"        , "staticContentRetrieve"        ,
    "socialMediaContentList"   , "socialMediaContentRetrieve"   ,

    "adminHeroList"            , "adminHeroRetrieve"            ,
    "adminAboutCompanyList"    , "adminAboutCompanyRetrieve"    ,
    "adminAboutApplicationList", "adminAboutApplicationRetrieve",
    "adminContactFormList"     , "adminContactFormRetrieve"     ,
    "adminContactInfoList"     , "adminContactInfoRetrieve"     ,

    "heroList"                 , "heroRetrieve"                 ,
    "aboutCompanyList"         , "aboutCompanyRetrieve"         ,
    "aboutApplicationList"     , "aboutApplicationRetrieve"     ,
    "contactFormList"          , "contactFormRetrieve"          ,
    "contactInfoList"          , "contactInfoRetrieve"          ,

  ],
  endpoints: () => ({})
})

export default apiConnection;
