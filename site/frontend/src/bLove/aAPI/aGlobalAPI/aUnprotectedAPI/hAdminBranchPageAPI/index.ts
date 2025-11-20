import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-branch-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminBranchPageRetrieve"]
    }),

  })
})

export default adminBranchPageAPIEndpoint;
