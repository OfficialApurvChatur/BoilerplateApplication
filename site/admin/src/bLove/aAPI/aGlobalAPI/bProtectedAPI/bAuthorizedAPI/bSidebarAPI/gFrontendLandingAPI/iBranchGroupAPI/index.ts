import apiConnection from "@/aConnection/cAPIConnection";


const branchGroupAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchGroupListAPI: builder.query({
      query: () => ({
        url: `/branch-group/list/`,
        method: "GET",
      }),
      providesTags: ["branchGroupList"]
    }),

    branchGroupCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/branch-group/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["branchGroupList"]
    }),

    branchGroupRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/branch-group/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchGroupRetrieve", id: data.params._id }
      ]
    }),

    branchGroupUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/branch-group/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "branchGroupList" },
        { type: "branchGroupRetrieve", id: data.params._id }
      ]
    }),

    branchGroupDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/branch-group/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchGroupList" },
        { type: "branchGroupRetrieve", id: data.params._id }
      ]
    }),

    branchGroupListMiniAPI: builder.query({
      query: () => ({
        url: `/branch-group/list-mini/`,
        method: "GET",
      }),
      providesTags: ["branchGroupListMini"]
    }),

  })
})

export default branchGroupAPIEndpoint;
