import apiConnection from "@/aConnection/cAPIConnection";


const projectGroupAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectGroupListAPI: builder.query({
      query: () => ({
        url: `/project-group/list/`,
        method: "GET",
      }),
      providesTags: ["projectGroupList"]
    }),

    projectGroupCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/project-group/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["projectGroupList"]
    }),

    projectGroupRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/project-group/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectGroupRetrieve", id: data.params._id }
      ]
    }),

    projectGroupUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/project-group/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "projectGroupList" },
        { type: "projectGroupRetrieve", id: data.params._id }
      ]
    }),

    projectGroupDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/project-group/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectGroupList" },
        { type: "projectGroupRetrieve", id: data.params._id }
      ]
    }),

    projectGroupListMiniAPI: builder.query({
      query: () => ({
        url: `/project-group/list-mini/`,
        method: "GET",
      }),
      providesTags: ["projectGroupListMini"]
    }),

  })
})

export default projectGroupAPIEndpoint;
