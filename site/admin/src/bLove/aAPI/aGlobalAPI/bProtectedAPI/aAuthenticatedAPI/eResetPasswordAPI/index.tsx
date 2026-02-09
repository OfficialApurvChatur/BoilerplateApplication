import apiConnection from "@/aConnection/cAPIConnection";


const resetPasswordAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    resetPasswordPrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/reset-password/primary/${data.params.token}`,
        method: "POST",
        body: data.body
      }),
    }),

  })
})

export default resetPasswordAPIEndpoint;
