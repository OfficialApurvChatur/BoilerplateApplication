import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectListAPI: builder.query({
      query: () => ({
        url: `/admin-project/list/`,
        method: "GET",
      }),
      providesTags: ["adminProjectList"]
    }),

    adminProjectCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-project/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminProjectList"]
    }),

    adminProjectRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-project/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectRetrieve", id: data.params._id }
      ]
    }),

    adminProjectUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-project/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminProjectList" },
        { type: "adminProjectRetrieve", id: data.params._id }
      ]
    }),

    adminProjectDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-project/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectList" },
        { type: "adminProjectRetrieve", id: data.params._id }
      ]
    }),

    adminProjectListMiniAPI: builder.query({
      query: () => ({
        url: `/admin-project/list-mini/`,
        method: "GET",
      }),
      providesTags: ["adminProjectListMini"]
    }),

  })
})

export default adminProjectAPIEndpoint;
