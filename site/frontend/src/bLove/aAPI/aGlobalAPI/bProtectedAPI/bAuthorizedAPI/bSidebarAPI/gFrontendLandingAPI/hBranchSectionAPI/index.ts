import apiConnection from "@/aConnection/cAPIConnection";


const branchSectionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchSectionListAPI: builder.query({
      query: () => ({
        url: `/branch-section/list/`,
        method: "GET",
      }),
      providesTags: ["branchSectionList"]
    }),

    branchSectionCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/branch-section/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["branchSectionList"]
    }),

    branchSectionRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/branch-section/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchSectionRetrieve", id: data.params._id }
      ]
    }),

    branchSectionUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/branch-section/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "branchSectionList" },
        { type: "branchSectionRetrieve", id: data.params._id }
      ]
    }),

    branchSectionDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/branch-section/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchSectionList" },
        { type: "branchSectionRetrieve", id: data.params._id }
      ]
    })

  })
})

export default branchSectionAPIEndpoint;
