import apiConnection from "@/aConnection/cAPIConnection";


const signUpAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signUpListAPI: builder.query({
      query: () => ({
        url: `/sign-up/list/`,
        method: "GET",
      }),
      providesTags: ["signUpList"]
    }),

    signUpCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/sign-up/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["signUpList"]
    }),

    signUpRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/sign-up/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signUpRetrieve", id: data.params._id }
      ]
    }),

    signUpUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/sign-up/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "signUpList" },
        { type: "signUpRetrieve", id: data.params._id }
      ]
    }),

    signUpDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/sign-up/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signUpList" },
        { type: "signUpRetrieve", id: data.params._id }
      ]
    })

  })
})

export default signUpAPIEndpoint;
