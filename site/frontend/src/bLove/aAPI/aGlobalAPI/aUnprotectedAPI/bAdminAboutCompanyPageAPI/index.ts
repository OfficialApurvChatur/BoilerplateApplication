import apiConnection from "@/aConnection/cAPIConnection";


const adminAboutCompanyPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminAboutCompanyPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-about-company-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminAboutCompanyPageRetrieve"]
    }),

  })
})

export default adminAboutCompanyPageAPIEndpoint;
