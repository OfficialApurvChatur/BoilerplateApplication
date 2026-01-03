import apiConnection from "@/aConnection/cAPIConnection";


const profileAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    profileListAPI: builder.query({
      query: () => ({
        url: `/profile/list/`,
        method: "GET",
      }),
      providesTags: ["profileList"]
    }),

    profileCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/profile/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["profileList"]
    }),

    profileRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/profile/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "profileRetrieve", id: data.params._id }
      ]
    }),

    profileUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/profile/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "profileList" },
        { type: "profileRetrieve", id: data.params._id }
      ]
    }),

    profileDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/profile/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "profileList" },
        { type: "profileRetrieve", id: data.params._id }
      ]
    }),

    profileListMiniAPI: builder.query({
      query: () => ({
        url: `/profile/list-mini/`,
        method: "GET",
      }),
      providesTags: ["profileListMini"]
    }),

  })
})

export default profileAPIEndpoint;
