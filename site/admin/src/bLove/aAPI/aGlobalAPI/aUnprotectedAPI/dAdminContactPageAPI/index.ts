import apiConnection from "@/aConnection/cAPIConnection";


const adminContactPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminContactPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-contact-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminContactPageRetrieve"]
    }),

  })
})

export default adminContactPageAPIEndpoint;
