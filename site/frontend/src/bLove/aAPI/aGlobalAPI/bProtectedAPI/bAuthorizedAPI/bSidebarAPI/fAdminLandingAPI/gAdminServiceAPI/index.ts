import apiConnection from "@/aConnection/cAPIConnection";


const adminServiceAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminServiceListAPI: builder.query({
      query: () => ({
        url: `/admin-service/list/`,
        method: "GET",
      }),
      providesTags: ["adminServiceList"]
    }),

    adminServiceCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-service/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminServiceList"]
    }),

    adminServiceRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-service/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminServiceRetrieve", id: data.params._id }
      ]
    }),

    adminServiceUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-service/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminServiceList" },
        { type: "adminServiceRetrieve", id: data.params._id }
      ]
    }),

    adminServiceDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-service/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminServiceList" },
        { type: "adminServiceRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminServiceAPIEndpoint;
