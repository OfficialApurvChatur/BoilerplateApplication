import apiConnection from "@/aConnection/cAPIConnection";


const adminBranchSectionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminBranchSectionListAPI: builder.query({
      query: () => ({
        url: `/admin-branch-section/list/`,
        method: "GET",
      }),
      providesTags: ["adminBranchSectionList"]
    }),

    adminBranchSectionCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-branch-section/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminBranchSectionList"]
    }),

    adminBranchSectionRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-branch-section/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchSectionRetrieve", id: data.params._id }
      ]
    }),

    adminBranchSectionUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-branch-section/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminBranchSectionList" },
        { type: "adminBranchSectionRetrieve", id: data.params._id }
      ]
    }),

    adminBranchSectionDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-branch-section/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminBranchSectionList" },
        { type: "adminBranchSectionRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminBranchSectionAPIEndpoint;
