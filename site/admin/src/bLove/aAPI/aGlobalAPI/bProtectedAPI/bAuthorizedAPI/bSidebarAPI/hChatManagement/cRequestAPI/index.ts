import apiConnection from "@/aConnection/cAPIConnection";


const requestAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    requestListAPI: builder.query({
      query: () => ({
        url: `/request/list/`,
        method: "GET",
      }),
      providesTags: ["requestList"]
    }),

    requestCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/request/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["requestList"]
    }),

    requestRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/request/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "requestRetrieve", id: data.params._id }
      ]
    }),

    requestUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/request/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "requestList" },
        { type: "requestRetrieve", id: data.params._id }
      ]
    }),

    requestDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/request/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "requestList" },
        { type: "requestRetrieve", id: data.params._id }
      ]
    })

  })
})

export default requestAPIEndpoint;
