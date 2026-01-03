import apiConnection from "@/aConnection/cAPIConnection";


const contactPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    contactPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/contact-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["contactPageRetrieve"]
    }),

  })
})

export default contactPageAPIEndpoint;
