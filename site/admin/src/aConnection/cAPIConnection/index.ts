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
    "adminHomePageList", 
    "adminAboutPageList", 
    "adminContactPageCreate",

    "baseList", "baseRetrieve",
    "activityLogList", "activityLogRetrieve",
    "apiLogList", "apiLogRetrieve",

    "accessPointList", "accessPointRetrieve", "accessPointListForMenuCreateAndUpdate",
    "menuList", "menuRetrieve", "menuListForRoleCreateAndUpdate",
    "roleList", "roleRetrieve", "roleListForUserCreateAndUpdate", "roleListForUserAuthSignUp", "roleUpdateRetrieve",
    "userList", "userRetrieve", "userListForProfileCreateAndUpdate",
    "profileList", "profileRetrieve", "profileListForUserCreateAndUpdate",

    "adminHeroList", "adminHeroRetrieve",
    "adminAboutCompanyList", "adminAboutCompanyRetrieve",
    "adminContactFormList", "adminContactFormRetrieve",

    "heroList", "heroRetrieve",
    "aboutCompanyList", "aboutCompanyRetrieve",
    "contactFormList", "contactFormRetrieve",

  ],
  endpoints: () => ({})
})

export default apiConnection;
