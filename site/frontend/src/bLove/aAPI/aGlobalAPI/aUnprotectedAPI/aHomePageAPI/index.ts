import apiConnection from "@/aConnection/cAPIConnection";


const homePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    homePageListAPI: builder.query({
      query: () => ({
        url: `home-page/list/`,
        method: "GET",
      }),
      providesTags: ["homePageList"]
    }),

  })
})

export default homePageAPIEndpoint;
