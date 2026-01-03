import apiConnection from "@/aConnection/cAPIConnection";


const aboutCompanyPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    aboutCompanyPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/about-company-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["aboutCompanyPageRetrieve"]
    }),

  })
})

export default aboutCompanyPageAPIEndpoint;
