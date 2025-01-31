import apiConnection from "@/aConnection/cAPIConnection";


const policyAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    policyListAPI: builder.query({
      query: () => ({
        url: `policy/list/`,
        method: "GET",
      }),
      providesTags: ["policyList"]
    }),

    policyCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/policy/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["policyList"]
    }),

    policyRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/policy/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "policyRetrieve", id: data.params._id }
      ]
    }),

    policyUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/policy/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "policyRetrieve", id: data.params._id }
      ]
    }),

    policyDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/policy/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "policyRetrieve", id: data.params._id }
      ]
    })

  })
})

export default policyAPIEndpoint;
