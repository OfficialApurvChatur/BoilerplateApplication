import apiConnection from "@/aConnection/cAPIConnection";


const apiLogAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    apiLogListAPI: builder.query({
      query: () => ({
        url: `/api-log/list/`,
        method: "GET",
      }),
      providesTags: ["apiLogList"]
    }),

    apiLogCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/api-log/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["apiLogList"]
    }),

    apiLogRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/api-log/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "apiLogRetrieve", id: data.params._id }
      ]
    }),

    apiLogUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/api-log/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "apiLogList" },
        { type: "apiLogRetrieve", id: data.params._id }
      ]
    }),

    apiLogDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/api-log/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "apiLogList" },
        { type: "apiLogRetrieve", id: data.params._id }
      ]
    })

  })
})

export default apiLogAPIEndpoint;
