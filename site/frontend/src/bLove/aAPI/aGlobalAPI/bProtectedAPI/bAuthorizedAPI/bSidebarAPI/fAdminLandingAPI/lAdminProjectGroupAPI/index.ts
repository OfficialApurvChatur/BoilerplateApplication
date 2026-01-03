import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectGroupAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectGroupListAPI: builder.query({
      query: () => ({
        url: `/admin-project-group/list/`,
        method: "GET",
      }),
      providesTags: ["adminProjectGroupList"]
    }),

    adminProjectGroupCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-project-group/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminProjectGroupList"]
    }),

    adminProjectGroupRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-project-group/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectGroupRetrieve", id: data.params._id }
      ]
    }),

    adminProjectGroupUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-project-group/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminProjectGroupList" },
        { type: "adminProjectGroupRetrieve", id: data.params._id }
      ]
    }),

    adminProjectGroupDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-project-group/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectGroupList" },
        { type: "adminProjectGroupRetrieve", id: data.params._id }
      ]
    }),

    adminProjectGroupListMiniAPI: builder.query({
      query: () => ({
        url: `/admin-project-group/list-mini/`,
        method: "GET",
      }),
      providesTags: ["adminProjectGroupListMini"]
    }),

  })
})

export default adminProjectGroupAPIEndpoint;
