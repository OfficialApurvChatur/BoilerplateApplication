import apiConnection from "@/aConnection/cAPIConnection";


const projectSectionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectSectionListAPI: builder.query({
      query: () => ({
        url: `/project-section/list/`,
        method: "GET",
      }),
      providesTags: ["projectSectionList"]
    }),

    projectSectionCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/project-section/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["projectSectionList"]
    }),

    projectSectionRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/project-section/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectSectionRetrieve", id: data.params._id }
      ]
    }),

    projectSectionUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/project-section/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "projectSectionList" },
        { type: "projectSectionRetrieve", id: data.params._id }
      ]
    }),

    projectSectionDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/project-section/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectSectionList" },
        { type: "projectSectionRetrieve", id: data.params._id }
      ]
    })

  })
})

export default projectSectionAPIEndpoint;
