import apiConnection from "@/aConnection/cAPIConnection";


const adminAboutApplicationPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminAboutApplicationPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-about-application-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminAboutApplicationPageRetrieve"]
    }),

  })
})

export default adminAboutApplicationPageAPIEndpoint;
