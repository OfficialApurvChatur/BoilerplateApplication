import apiConnection from "@/aConnection/cAPIConnection";


const activityLogAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    activityLogListAPI: builder.query({
      query: () => ({
        url: `/activity-log/list/`,
        method: "GET",
      }),
      providesTags: ["activityLogList"]
    }),

    activityLogCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/activity-log/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["activityLogList"]
    }),

    activityLogRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/activity-log/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "activityLogRetrieve", id: data.params._id }
      ]
    }),

    activityLogUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/activity-log/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "activityLogList" },
        { type: "activityLogRetrieve", id: data.params._id }
      ]
    }),

    activityLogDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/activity-log/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "activityLogList" },
        { type: "activityLogRetrieve", id: data.params._id }
      ]
    })

  })
})

export default activityLogAPIEndpoint;
