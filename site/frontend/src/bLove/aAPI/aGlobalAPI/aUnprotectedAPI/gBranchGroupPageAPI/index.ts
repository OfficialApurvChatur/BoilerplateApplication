import apiConnection from "@/aConnection/cAPIConnection";


const branchGroupPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchGroupPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/branch-group-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["branchGroupPageRetrieve"]
    }),

  })
})

export default branchGroupPageAPIEndpoint;
