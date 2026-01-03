import apiConnection from "@/aConnection/cAPIConnection";


const adminContactInfoAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminContactInfoListAPI: builder.query({
      query: () => ({
        url: `/admin-contact-info/list/`,
        method: "GET",
      }),
      providesTags: ["adminContactInfoList"]
    }),

    adminContactInfoCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-contact-info/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminContactInfoList"]
    }),

    adminContactInfoRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-contact-info/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminContactInfoRetrieve", id: data.params._id }
      ]
    }),

    adminContactInfoUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-contact-info/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminContactInfoList" },
        { type: "adminContactInfoRetrieve", id: data.params._id }
      ]
    }),

    adminContactInfoDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-contact-info/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminContactInfoList" },
        { type: "adminContactInfoRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminContactInfoAPIEndpoint;
