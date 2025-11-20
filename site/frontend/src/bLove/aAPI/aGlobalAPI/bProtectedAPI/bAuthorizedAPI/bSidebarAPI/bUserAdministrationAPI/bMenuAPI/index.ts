import apiConnection from "@/aConnection/cAPIConnection";


const menuAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    menuListAPI: builder.query({
      query: () => ({
        url: `/menu/list/`,
        method: "GET",
      }),
      providesTags: ["menuList"]
    }),

    menuCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/menu/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["menuList"]
    }),

    menuRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/menu/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "menuRetrieve", id: data.params._id }
      ]
    }),

    menuUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/menu/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "menuList" },
        { type: "menuRetrieve", id: data.params._id }
      ]
    }),

    menuDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/menu/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "menuList" },
        { type: "menuRetrieve", id: data.params._id }
      ]
    }),

    menuListMiniAPI: builder.query({
      query: () => ({
        url: `/menu/list-mini/`,
        method: "GET",
      }),
      providesTags: ["menuListMini"]
    }),

  })
})

export default menuAPIEndpoint;
