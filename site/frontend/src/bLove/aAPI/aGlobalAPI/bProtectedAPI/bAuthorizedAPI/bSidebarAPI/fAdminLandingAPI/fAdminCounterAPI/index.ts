import apiConnection from "@/aConnection/cAPIConnection";


const adminCounterAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminCounterListAPI: builder.query({
      query: () => ({
        url: `/admin-counter/list/`,
        method: "GET",
      }),
      providesTags: ["adminCounterList"]
    }),

    adminCounterCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-counter/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminCounterList"]
    }),

    adminCounterRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-counter/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminCounterRetrieve", id: data.params._id }
      ]
    }),

    adminCounterUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-counter/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminCounterList" },
        { type: "adminCounterRetrieve", id: data.params._id }
      ]
    }),

    adminCounterDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-counter/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminCounterList" },
        { type: "adminCounterRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminCounterAPIEndpoint;
