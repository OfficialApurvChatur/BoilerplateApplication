import apiConnection from "@/aConnection/cAPIConnection";


const contactFormAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    contactFormListAPI: builder.query({
      query: () => ({
        url: `/contact-form/list/`,
        method: "GET",
      }),
      providesTags: ["contactFormList"]
    }),

    contactFormCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/contact-form/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["contactFormList"]
    }),

    contactFormRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/contact-form/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "contactFormRetrieve", id: data.params._id }
      ]
    }),

    contactFormUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/contact-form/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "contactFormList" },
        { type: "contactFormRetrieve", id: data.params._id }
      ]
    }),

    contactFormDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/contact-form/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "contactFormList" },
        { type: "contactFormRetrieve", id: data.params._id }
      ]
    })

  })
})

export default contactFormAPIEndpoint;
