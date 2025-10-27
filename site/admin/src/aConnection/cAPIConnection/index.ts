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
    "adminHomePageRetrieve"               , 
    "adminAboutCompanyPageRetrieve"       , 
    "adminAboutApplicationPageRetrieve"   , 
    "adminContactPageRetrieve"            , 
    "adminServicePageRetrieve"            , 
    "adminBranchSectionPageRetrieve"      , 
    "adminBranchGroupPageRetrieve"        , 
    "adminBranchPageRetrieve"             , 
    "adminProjectSectionPageRetrieve"     , 
    "adminProjectGroupPageRetrieve"       , 
    "adminProjectPageRetrieve"            , 

    "baseList"                 , "baseRetrieve"                 ,
    "activityLogList"          , "activityLogRetrieve"          ,
    "apiLogList"               , "apiLogRetrieve"               ,

    "accessPointList"          , "accessPointRetrieve"          , "accessPointListMini"   ,
    "menuList"                 , "menuRetrieve"                 , "menuListMini"          ,
    "permissionList"           , "permissionRetrieve"           , "permissionListMini"    ,
    "roleList"                 , "roleRetrieve"                 , "roleListMini"          ,
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
    "audioStorageList"         , "audioStorageRetrieve"         ,

    "staticContentList"        , "staticContentRetrieve"        ,
    "socialMediaContentList"   , "socialMediaContentRetrieve"   ,

    "adminHeroList"            , "adminHeroRetrieve"            ,
    "adminAboutCompanyList"    , "adminAboutCompanyRetrieve"    ,
    "adminAboutApplicationList", "adminAboutApplicationRetrieve",
    "adminContactFormList"     , "adminContactFormRetrieve"     ,
    "adminContactInfoList"     , "adminContactInfoRetrieve"     ,
    "adminCounterList"         , "adminCounterRetrieve"         ,
    "adminServiceList"         , "adminServiceRetrieve"         ,
    "adminBranchSectionList"   , "adminBranchSectionRetrieve"   ,
    "adminBranchGroupList"     , "adminBranchGroupRetrieve"     , "adminBranchGroupListMini"   ,
    "adminBranchList"          , "adminBranchRetrieve"          , "adminBranchListMini"        ,
    "adminProjectSectionList"  , "adminProjectSectionRetrieve"  ,
    "adminProjectGroupList"    , "adminProjectGroupRetrieve"    , "adminProjectGroupListMini"  ,
    "adminProjectList"         , "adminProjectRetrieve"         , "adminProjectListMini"       ,

    "heroList"                 , "heroRetrieve"                 ,
    "aboutCompanyList"         , "aboutCompanyRetrieve"         ,
    "aboutApplicationList"     , "aboutApplicationRetrieve"     ,
    "contactFormList"          , "contactFormRetrieve"          ,
    "contactInfoList"          , "contactInfoRetrieve"          ,
    "counterList"              , "counterRetrieve"              ,
    "serviceList"              , "serviceRetrieve"              ,
    "branchSectionList"        , "branchSectionRetrieve"        ,
    "branchGroupList"          , "branchGroupRetrieve"          , "branchGroupListMini"   ,
    "branchList"               , "branchRetrieve"               , "branchListMini"        ,
    "projectSectionList"       , "projectSectionRetrieve"       ,
    "projectGroupList"         , "projectGroupRetrieve"         , "projectGroupListMini"  ,
    "projectList"              , "projectRetrieve"              , "projectListMini"       ,

    "chatList"                 , "chatRetrieve"                 ,
    "messageList"              , "messageRetrieve"              ,
    "requestList"              , "requestRetrieve"              ,

  ],
  endpoints: () => ({})
})

export default apiConnection;
