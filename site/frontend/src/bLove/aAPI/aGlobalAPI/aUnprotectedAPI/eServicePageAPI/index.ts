import apiConnection from "@/aConnection/cAPIConnection";


const servicePageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    servicePageRetrieveAPI: builder.query({
      query: () => ({
        url: `/service-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["servicePageRetrieve"]
    }),

  })
})

export default servicePageAPIEndpoint;
