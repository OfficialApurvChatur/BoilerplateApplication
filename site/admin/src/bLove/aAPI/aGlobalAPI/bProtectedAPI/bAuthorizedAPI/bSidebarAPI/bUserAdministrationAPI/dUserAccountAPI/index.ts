import apiConnection from "@/aConnection/cAPIConnection";


const userAccountAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    userAccountRetrieveAPI: builder.query({
      query: () => ({
        url: `user/account/retrieve/`,
        method: "GET",
      }),
    }),

  })
})

export default userAccountAPIEndpoint;
