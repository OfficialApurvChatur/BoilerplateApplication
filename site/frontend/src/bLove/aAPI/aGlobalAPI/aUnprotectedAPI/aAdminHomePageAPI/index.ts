import apiConnection from "@/aConnection/cAPIConnection";


const adminHomePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminHomePageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-home-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminHomePageRetrieve"]
    }),

  })
})

export default adminHomePageAPIEndpoint;
