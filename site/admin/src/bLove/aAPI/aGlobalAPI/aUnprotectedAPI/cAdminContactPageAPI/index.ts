import apiConnection from "@/aConnection/cAPIConnection";


const adminContactPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminContactPageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-contact-page/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminContactPageCreate"]
    }),

  })
})

export default adminContactPageAPIEndpoint;
