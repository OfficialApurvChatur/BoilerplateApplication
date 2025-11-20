import apiConnection from "@/aConnection/cAPIConnection";


const aboutApplicationAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    aboutApplicationListAPI: builder.query({
      query: () => ({
        url: `/about-application/list/`,
        method: "GET",
      }),
      providesTags: ["aboutApplicationList"]
    }),

    aboutApplicationCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/about-application/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["aboutApplicationList"]
    }),

    aboutApplicationRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/about-application/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "aboutApplicationRetrieve", id: data.params._id }
      ]
    }),

    aboutApplicationUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/about-application/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "aboutApplicationList" },
        { type: "aboutApplicationRetrieve", id: data.params._id }
      ]
    }),

    aboutApplicationDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/about-application/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "aboutApplicationList" },
        { type: "aboutApplicationRetrieve", id: data.params._id }
      ]
    })

  })
})

export default aboutApplicationAPIEndpoint;
