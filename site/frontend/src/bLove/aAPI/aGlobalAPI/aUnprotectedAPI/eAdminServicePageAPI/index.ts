import apiConnection from "@/aConnection/cAPIConnection";


const adminServicePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminServicePageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-service-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminServicePageRetrieve"]
    }),

  })
})

export default adminServicePageAPIEndpoint;
