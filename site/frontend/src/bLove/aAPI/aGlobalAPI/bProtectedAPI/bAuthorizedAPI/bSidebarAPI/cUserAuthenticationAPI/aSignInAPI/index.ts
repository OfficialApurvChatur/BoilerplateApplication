import apiConnection from "@/aConnection/cAPIConnection";


const signInAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signInListAPI: builder.query({
      query: () => ({
        url: `/sign-in/list/`,
        method: "GET",
      }),
      providesTags: ["signInList"]
    }),

    signInCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/sign-in/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["signInList"]
    }),

    signInRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/sign-in/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signInRetrieve", id: data.params._id }
      ]
    }),

    signInUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/sign-in/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "signInList" },
        { type: "signInRetrieve", id: data.params._id }
      ]
    }),

    signInDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/sign-in/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signInList" },
        { type: "signInRetrieve", id: data.params._id }
      ]
    })

  })
})

export default signInAPIEndpoint;
