import apiConnection from "@/aConnection/cAPIConnection";


const contactPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    contactPageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/contact-page/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["contactPageCreate"]
    }),

  })
})

export default contactPageAPIEndpoint;
