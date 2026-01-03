import apiConnection from "@/aConnection/cAPIConnection";


const projectAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectListAPI: builder.query({
      query: () => ({
        url: `/project/list/`,
        method: "GET",
      }),
      providesTags: ["projectList"]
    }),

    projectCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/project/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["projectList"]
    }),

    projectRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/project/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectRetrieve", id: data.params._id }
      ]
    }),

    projectUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/project/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "projectList" },
        { type: "projectRetrieve", id: data.params._id }
      ]
    }),

    projectDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/project/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "projectList" },
        { type: "projectRetrieve", id: data.params._id }
      ]
    }),

    projectListMiniAPI: builder.query({
      query: () => ({
        url: `/project/list-mini/`,
        method: "GET",
      }),
      providesTags: ["projectListMini"]
    }),

  })
})

export default projectAPIEndpoint;
