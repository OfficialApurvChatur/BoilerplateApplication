import apiConnection from "@/aConnection/cAPIConnection";


const staticContentAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    staticContentListAPI: builder.query({
      query: () => ({
        url: `/static-content/list/`,
        method: "GET",
      }),
      providesTags: ["staticContentList"]
    }),

    staticContentCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/static-content/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["staticContentList"]
    }),

    staticContentRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/static-content/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "staticContentRetrieve", id: data.params._id }
      ]
    }),

    staticContentUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/static-content/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "staticContentList" },
        { type: "staticContentRetrieve", id: data.params._id }
      ]
    }),

    staticContentDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/static-content/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "staticContentList" },
        { type: "staticContentRetrieve", id: data.params._id }
      ]
    })

  })
})

export default staticContentAPIEndpoint;
