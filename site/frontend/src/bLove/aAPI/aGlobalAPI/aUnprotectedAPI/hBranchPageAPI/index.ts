import apiConnection from "@/aConnection/cAPIConnection";


const branchPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/branch-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["branchPageRetrieve"]
    }),

  })
})

export default branchPageAPIEndpoint;
