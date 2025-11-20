import apiConnection from "@/aConnection/cAPIConnection";


const adminAboutApplicationAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminAboutApplicationListAPI: builder.query({
      query: () => ({
        url: `/admin-about-application/list/`,
        method: "GET",
      }),
      providesTags: ["adminAboutApplicationList"]
    }),

    adminAboutApplicationCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-about-application/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminAboutApplicationList"]
    }),

    adminAboutApplicationRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-about-application/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminAboutApplicationRetrieve", id: data.params._id }
      ]
    }),

    adminAboutApplicationUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-about-application/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminAboutApplicationList" },
        { type: "adminAboutApplicationRetrieve", id: data.params._id }
      ]
    }),

    adminAboutApplicationDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-about-application/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminAboutApplicationList" },
        { type: "adminAboutApplicationRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminAboutApplicationAPIEndpoint;
