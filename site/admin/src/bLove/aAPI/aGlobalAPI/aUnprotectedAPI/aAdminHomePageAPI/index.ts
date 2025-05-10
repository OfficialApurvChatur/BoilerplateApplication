import apiConnection from "@/aConnection/cAPIConnection";


const adminHomePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminHomePageListAPI: builder.query({
      query: () => ({
        url: `admin-home-page/list/`,
        method: "GET",
      }),
      providesTags: ["adminHomePageList"]
    }),

  })
})

export default adminHomePageAPIEndpoint;
