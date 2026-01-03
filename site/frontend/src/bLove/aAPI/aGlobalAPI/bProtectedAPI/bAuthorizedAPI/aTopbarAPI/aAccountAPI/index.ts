import apiConnection from "@/aConnection/cAPIConnection";


const accountAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    accountRetrievePrimaryAPI: builder.query({
      query: () => ({
        url: `/account/retrieve-primary/`,
        method: "GET",
      }),
    }),

    accountUpdatePrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/account/update-primary/`,
        method: "PUT",
        body: data.body
      })
    }),

    accountEmailUpdatePrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/account/email-update-primary/`,
        method: "PUT",
        body: data.body
      })
    }),

    accountPasswordUpdatePrimaryAPI: builder.mutation({
      query: (data) => ({
        url: `/account/password-update-primary/`,
        method: "PUT",
        body: data.body
      })
    }),

  })
})

export default accountAPIEndpoint;
