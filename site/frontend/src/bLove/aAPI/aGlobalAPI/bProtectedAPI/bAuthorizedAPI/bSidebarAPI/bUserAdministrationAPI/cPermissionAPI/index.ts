import apiConnection from "@/aConnection/cAPIConnection";


const permissionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    permissionListAPI: builder.query({
      query: () => ({
        url: `/permission/list/`,
        method: "GET",
      }),
      providesTags: ["permissionList"]
    }),

    permissionCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/permission/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["permissionList"]
    }),

    permissionRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/permission/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "permissionRetrieve", id: data.params._id }
      ]
    }),

    permissionUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/permission/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "permissionList" },
        { type: "permissionRetrieve", id: data.params._id }
      ]
    }),

    permissionDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/permission/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "permissionList" },
        { type: "permissionRetrieve", id: data.params._id }
      ]
    }),

    permissionListMiniAPI: builder.query({
      query: () => ({
        url: `/permission/list-mini/`,
        method: "GET",
      }),
      providesTags: ["permissionListMini"]
    }),

  })
})

export default permissionAPIEndpoint;
