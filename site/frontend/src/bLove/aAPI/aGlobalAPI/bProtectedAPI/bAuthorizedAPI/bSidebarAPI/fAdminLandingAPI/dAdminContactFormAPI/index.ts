import apiConnection from "@/aConnection/cAPIConnection";


const adminContactFormAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminContactFormListAPI: builder.query({
      query: () => ({
        url: `/admin-contact-form/list/`,
        method: "GET",
      }),
      providesTags: ["adminContactFormList"]
    }),

    adminContactFormCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/admin-contact-form/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["adminContactFormList"]
    }),

    adminContactFormRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/admin-contact-form/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminContactFormRetrieve", id: data.params._id }
      ]
    }),

    adminContactFormUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/admin-contact-form/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "adminContactFormList" },
        { type: "adminContactFormRetrieve", id: data.params._id }
      ]
    }),

    adminContactFormDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/admin-contact-form/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "adminContactFormList" },
        { type: "adminContactFormRetrieve", id: data.params._id }
      ]
    })

  })
})

export default adminContactFormAPIEndpoint;
