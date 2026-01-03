import apiConnection from "@/aConnection/cAPIConnection";


const aboutApplicationPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    aboutApplicationPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/about-application-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["aboutApplicationPageRetrieve"]
    }),

  })
})

export default aboutApplicationPageAPIEndpoint;
