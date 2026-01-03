import apiConnection from "@/aConnection/cAPIConnection";


const adminHeroAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminHeroListAPI: builder.query({
      query: () => ({
        url: `/admin-hero/list/`,
        method: "GET",
      }),
      providesTags: ["adminHeroList"]
    }),

    adminHeroCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-hero/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminHeroList"]
    }),

    adminHeroRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-hero/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminHeroRetrieve", id: data.params._id }
      ]
    }),

    adminHeroUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-hero/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminHeroList" },
        { type: "adminHeroRetrieve", id: data.params._id }
      ]
    }),

    adminHeroDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-hero/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminHeroList" },
        { type: "adminHeroRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminHeroAPIEndpoint;
