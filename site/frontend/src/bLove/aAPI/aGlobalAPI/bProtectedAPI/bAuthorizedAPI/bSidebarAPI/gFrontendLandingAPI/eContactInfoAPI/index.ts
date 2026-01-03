import apiConnection from "@/aConnection/cAPIConnection";


const contactInfoAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    contactInfoListAPI: builder.query({
      query: () => ({
        url: `/contact-info/list/`,
        method: "GET",
      }),
      providesTags: ["contactInfoList"]
    }),

    contactInfoCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/contact-info/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["contactInfoList"]
    }),

    contactInfoRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/contact-info/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "contactInfoRetrieve", id: data.params._id }
      ]
    }),

    contactInfoUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/contact-info/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "contactInfoList" },
        { type: "contactInfoRetrieve", id: data.params._id }
      ]
    }),

    contactInfoDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/contact-info/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "contactInfoList" },
        { type: "contactInfoRetrieve", id: data.params._id }
      ]
    })

  })
})

export default contactInfoAPIEndpoint;
