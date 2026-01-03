import apiConnection from "@/aConnection/cAPIConnection";


const branchSectionPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchSectionPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/branch-section-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["branchSectionPageRetrieve"]
    }),

  })
})

export default branchSectionPageAPIEndpoint;
