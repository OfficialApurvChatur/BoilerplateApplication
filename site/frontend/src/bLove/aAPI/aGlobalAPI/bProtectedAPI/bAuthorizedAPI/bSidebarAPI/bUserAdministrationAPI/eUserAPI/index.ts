import apiConnection from "@/aConnection/cAPIConnection";


const userAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    userListAPI: builder.query({
      query: () => ({
        url: `/user/list/`,
        method: "GET",
      }),
      providesTags: ["userList"]
    }),

    userCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/user/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["userList"]
    }),

    userRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/user/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "userRetrieve", id: data.params._id }
      ]
    }),

    userUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/user/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "userList" },
        { type: "userRetrieve", id: data.params._id }
      ]
    }),

    userDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/user/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "userList" },
        { type: "userRetrieve", id: data.params._id }
      ]
    }),

    userListMiniAPI: builder.query({
      query: () => ({
        url: `/user/list-mini/`,
        method: "GET",
      }),
      providesTags: ["userListMini"]
    }),

  })
})

export default userAPIEndpoint;
