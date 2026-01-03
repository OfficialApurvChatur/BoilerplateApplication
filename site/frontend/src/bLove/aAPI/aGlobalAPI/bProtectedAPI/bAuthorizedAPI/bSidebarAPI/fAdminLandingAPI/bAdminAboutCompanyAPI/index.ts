import apiConnection from "@/aConnection/cAPIConnection";


const adminAboutCompanyAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminAboutCompanyListAPI: builder.query({
      query: () => ({
        url: `/admin-about-company/list/`,
        method: "GET",
      }),
      providesTags: ["adminAboutCompanyList"]
    }),

    adminAboutCompanyCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-about-company/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminAboutCompanyList"]
    }),

    adminAboutCompanyRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-about-company/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminAboutCompanyRetrieve", id: data.params._id }
      ]
    }),

    adminAboutCompanyUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-about-company/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminAboutCompanyList" },
        { type: "adminAboutCompanyRetrieve", id: data.params._id }
      ]
    }),

    adminAboutCompanyDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-about-company/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminAboutCompanyList" },
        { type: "adminAboutCompanyRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminAboutCompanyAPIEndpoint;
