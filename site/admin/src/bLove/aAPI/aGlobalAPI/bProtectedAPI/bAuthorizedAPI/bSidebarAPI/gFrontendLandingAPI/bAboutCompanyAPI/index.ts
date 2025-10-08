import apiConnection from "@/aConnection/cAPIConnection";


const aboutCompanyAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    aboutCompanyListAPI: builder.query({
      query: () => ({
        url: `/about-company/list/`,
        method: "GET",
      }),
      providesTags: ["aboutCompanyList"]
    }),

    aboutCompanyCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/about-company/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["aboutCompanyList"]
    }),

    aboutCompanyRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/about-company/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "aboutCompanyRetrieve", id: data.params._id }
      ]
    }),

    aboutCompanyUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/about-company/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "aboutCompanyList" },
        { type: "aboutCompanyRetrieve", id: data.params._id }
      ]
    }),

    aboutCompanyDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/about-company/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "aboutCompanyList" },
        { type: "aboutCompanyRetrieve", id: data.params._id }
      ]
    })

  })
})

export default aboutCompanyAPIEndpoint;
