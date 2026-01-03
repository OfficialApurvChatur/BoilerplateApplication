import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectSectionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectSectionListAPI: builder.query({
      query: () => ({
        url: `/admin-project-section/list/`,
        method: "GET",
      }),
      providesTags: ["adminProjectSectionList"]
    }),

    adminProjectSectionCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-project-section/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminProjectSectionList"]
    }),

    adminProjectSectionRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-project-section/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectSectionRetrieve", id: data.params._id }
      ]
    }),

    adminProjectSectionUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-project-section/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminProjectSectionList" },
        { type: "adminProjectSectionRetrieve", id: data.params._id }
      ]
    }),

    adminProjectSectionDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-project-section/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminProjectSectionList" },
        { type: "adminProjectSectionRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminProjectSectionAPIEndpoint;
