import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import brandConnection from "../eBrandConnection";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${brandConnection.oBackendBaseURL.replace(/\/$/, "")}/api/v1`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    }
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
