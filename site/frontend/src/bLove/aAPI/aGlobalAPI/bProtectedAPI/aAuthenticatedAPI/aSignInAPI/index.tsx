import apiConnection from "@/aConnection/cAPIConnection";


const signInAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signInPrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/sign-in/primary/`,
        method: "POST",
        body: data.body
      }),
    }),

  })
})

export default signInAPIEndpoint;
