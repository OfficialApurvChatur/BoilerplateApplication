import apiConnection from "@/aConnection/cAPIConnection";


const signOutAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signOutPrimaryAPI: builder.query({
      query: () => ({
        url: `/sign-out/primary/`,
        method: "GET",
      }),
    }),

  })
})

export default signOutAPIEndpoint;
