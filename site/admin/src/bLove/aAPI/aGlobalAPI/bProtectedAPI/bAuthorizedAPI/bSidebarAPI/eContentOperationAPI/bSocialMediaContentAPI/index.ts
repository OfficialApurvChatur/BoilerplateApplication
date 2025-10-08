import apiConnection from "@/aConnection/cAPIConnection";


const socialMediaContentAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    socialMediaContentListAPI: builder.query({
      query: () => ({
        url: `/social-media-content/list/`,
        method: "GET",
      }),
      providesTags: ["socialMediaContentList"]
    }),

    socialMediaContentCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/social-media-content/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["socialMediaContentList"]
    }),

    socialMediaContentRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/social-media-content/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "socialMediaContentRetrieve", id: data.params._id }
      ]
    }),

    socialMediaContentUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/social-media-content/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "socialMediaContentList" },
        { type: "socialMediaContentRetrieve", id: data.params._id }
      ]
    }),

    socialMediaContentDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/social-media-content/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "socialMediaContentList" },
        { type: "socialMediaContentRetrieve", id: data.params._id }
      ]
    })

  })
})

export default socialMediaContentAPIEndpoint;
