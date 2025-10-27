import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectSectionPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectSectionPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-project-section-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminProjectSectionPageRetrieve"]
    }),

  })
})

export default adminProjectSectionPageAPIEndpoint;
