import apiConnection from "@/aConnection/cAPIConnection";


const serviceAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    serviceListAPI: builder.query({
      query: () => ({
        url: `/service/list/`,
        method: "GET",
      }),
      providesTags: ["serviceList"]
    }),

    serviceCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/service/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["serviceList"]
    }),

    serviceRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/service/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "serviceRetrieve", id: data.params._id }
      ]
    }),

    serviceUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/service/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "serviceList" },
        { type: "serviceRetrieve", id: data.params._id }
      ]
    }),

    serviceDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/service/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "serviceList" },
        { type: "serviceRetrieve", id: data.params._id }
      ]
    })

  })
})

export default serviceAPIEndpoint;
