import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchGroupPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchGroupPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-branch-group-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminBranchGroupPageRetrieve"]
    }),

  })
})

export default adminBranchGroupPageAPIEndpoint;
