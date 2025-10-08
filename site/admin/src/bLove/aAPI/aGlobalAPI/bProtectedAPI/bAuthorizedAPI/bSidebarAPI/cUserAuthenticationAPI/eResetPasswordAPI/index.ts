import apiConnection from "@/aConnection/cAPIConnection";


const resetPasswordAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    resetPasswordListAPI: builder.query({
      query: () => ({
        url: `/reset-password/list/`,
        method: "GET",
      }),
      providesTags: ["resetPasswordList"]
    }),

    resetPasswordCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/reset-password/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["resetPasswordList"]
    }),

    resetPasswordRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/reset-password/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "resetPasswordRetrieve", id: data.params._id }
      ]
    }),

    resetPasswordUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/reset-password/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "resetPasswordList" },
        { type: "resetPasswordRetrieve", id: data.params._id }
      ]
    }),

    resetPasswordDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/reset-password/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "resetPasswordList" },
        { type: "resetPasswordRetrieve", id: data.params._id }
      ]
    })

  })
})

export default resetPasswordAPIEndpoint;
