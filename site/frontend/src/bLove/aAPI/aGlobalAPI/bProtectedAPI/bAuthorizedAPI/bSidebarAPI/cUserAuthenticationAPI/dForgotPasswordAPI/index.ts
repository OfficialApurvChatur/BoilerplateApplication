import apiConnection from "@/aConnection/cAPIConnection";


const forgotPasswordAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    forgotPasswordListAPI: builder.query({
      query: () => ({
        url: `/forgot-password/list/`,
        method: "GET",
      }),
      providesTags: ["forgotPasswordList"]
    }),

    forgotPasswordCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/forgot-password/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["forgotPasswordList"]
    }),

    forgotPasswordRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/forgot-password/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "forgotPasswordRetrieve", id: data.params._id }
      ]
    }),

    forgotPasswordUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/forgot-password/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "forgotPasswordList" },
        { type: "forgotPasswordRetrieve", id: data.params._id }
      ]
    }),

    forgotPasswordDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/forgot-password/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "forgotPasswordList" },
        { type: "forgotPasswordRetrieve", id: data.params._id }
      ]
    })

  })
})

export default forgotPasswordAPIEndpoint;
