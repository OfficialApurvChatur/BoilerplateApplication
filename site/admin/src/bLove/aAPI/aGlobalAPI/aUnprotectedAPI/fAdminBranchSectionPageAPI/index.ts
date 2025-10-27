import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchSectionPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchSectionPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-branch-section-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminBranchSectionPageRetrieve"]
    }),

  })
})

export default adminBranchSectionPageAPIEndpoint;
