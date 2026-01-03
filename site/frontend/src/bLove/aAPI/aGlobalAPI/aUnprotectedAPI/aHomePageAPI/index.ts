import apiConnection from "@/aConnection/cAPIConnection";


const homePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    homePageRetrieveAPI: builder.query({
      query: () => ({
        url: `/home-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["homePageRetrieve"]
    }),

  })
})

export default homePageAPIEndpoint;
