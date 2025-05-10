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
    "homePageList", 
    "aboutPageList", 
    "contactPageCreate",

  ],
  endpoints: () => ({})
})

export default apiConnection;
