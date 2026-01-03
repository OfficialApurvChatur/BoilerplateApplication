import apiConnection from "@/aConnection/cAPIConnection";


const signUpAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signUpPrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/sign-up/primary/`,
        method: "POST",
        body: data.body
      }),
    }),

  })
})

export default signUpAPIEndpoint;
