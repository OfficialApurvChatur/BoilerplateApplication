import apiConnection from "@/aConnection/cAPIConnection";


const forgotPasswordAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    forgotPasswordPrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/forgot-password/primary/`,
        method: "POST",
        body: data.body
      }),
    }),

  })
})

export default forgotPasswordAPIEndpoint;
