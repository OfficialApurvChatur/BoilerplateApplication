import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchGroupAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchGroupListAPI: builder.query({
      query: () => ({
        url: `/admin-branch-group/list/`,
        method: "GET",
      }),
      providesTags: ["adminBranchGroupList"]
    }),

    adminBranchGroupCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-branch-group/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminBranchGroupList"]
    }),

    adminBranchGroupRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-branch-group/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchGroupRetrieve", id: data.params._id }
      ]
    }),

    adminBranchGroupUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-branch-group/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminBranchGroupList" },
        { type: "adminBranchGroupRetrieve", id: data.params._id }
      ]
    }),

    adminBranchGroupDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-branch-group/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchGroupList" },
        { type: "adminBranchGroupRetrieve", id: data.params._id }
      ]
    }),

    adminBranchGroupListMiniAPI: builder.query({
      query: () => ({
        url: `/admin-branch-group/list-mini/`,
        method: "GET",
      }),
      providesTags: ["adminBranchGroupListMini"]
    }),

  })
})

export default adminBranchGroupAPIEndpoint;
