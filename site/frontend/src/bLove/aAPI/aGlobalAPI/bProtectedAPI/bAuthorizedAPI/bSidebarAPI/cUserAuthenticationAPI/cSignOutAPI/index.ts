import apiConnection from "@/aConnection/cAPIConnection";


const signOutAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    signOutListAPI: builder.query({
      query: () => ({
        url: `/sign-out/list/`,
        method: "GET",
      }),
      providesTags: ["signOutList"]
    }),

    signOutCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/sign-out/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["signOutList"]
    }),

    signOutRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/sign-out/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signOutRetrieve", id: data.params._id }
      ]
    }),

    signOutUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/sign-out/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "signOutList" },
        { type: "signOutRetrieve", id: data.params._id }
      ]
    }),

    signOutDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/sign-out/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "signOutList" },
        { type: "signOutRetrieve", id: data.params._id }
      ]
    })

  })
})

export default signOutAPIEndpoint;
