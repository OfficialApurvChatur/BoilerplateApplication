import apiConnection from "@/aConnection/cAPIConnection";


const accountAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    accountListAPI: builder.query({
      query: () => ({
        url: `/account/list/`,
        method: "GET",
      }),
      providesTags: ["accountList"]
    }),

    accountCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/account/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["accountList"]
    }),

    accountRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/account/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "accountRetrieve", id: data.params._id }
      ]
    }),

    accountUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/account/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "accountList" },
        { type: "accountRetrieve", id: data.params._id }
      ]
    }),

    accountDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/account/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "accountList" },
        { type: "accountRetrieve", id: data.params._id }
      ]
    })

  })
})

export default accountAPIEndpoint;
