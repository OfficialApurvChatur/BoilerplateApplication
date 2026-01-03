import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchListAPI: builder.query({
      query: () => ({
        url: `/admin-branch/list/`,
        method: "GET",
      }),
      providesTags: ["adminBranchList"]
    }),

    adminBranchCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-branch/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminBranchList"]
    }),

    adminBranchRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-branch/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchRetrieve", id: data.params._id }
      ]
    }),

    adminBranchUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-branch/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminBranchList" },
        { type: "adminBranchRetrieve", id: data.params._id }
      ]
    }),

    adminBranchDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-branch/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchList" },
        { type: "adminBranchRetrieve", id: data.params._id }
      ]
    }),

    adminBranchListMiniAPI: builder.query({
      query: () => ({
        url: `/admin-branch/list-mini/`,
        method: "GET",
      }),
      providesTags: ["adminBranchListMini"]
    }),

  })
})

export default adminBranchAPIEndpoint;
