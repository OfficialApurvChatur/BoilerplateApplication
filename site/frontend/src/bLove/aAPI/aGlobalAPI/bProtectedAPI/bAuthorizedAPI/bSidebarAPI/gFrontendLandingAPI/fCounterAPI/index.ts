import apiConnection from "@/aConnection/cAPIConnection";


const counterAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    counterListAPI: builder.query({
      query: () => ({
        url: `/counter/list/`,
        method: "GET",
      }),
      providesTags: ["counterList"]
    }),

    counterCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/counter/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["counterList"]
    }),

    counterRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/counter/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "counterRetrieve", id: data.params._id }
      ]
    }),

    counterUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/counter/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "counterList" },
        { type: "counterRetrieve", id: data.params._id }
      ]
    }),

    counterDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/counter/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "counterList" },
        { type: "counterRetrieve", id: data.params._id }
      ]
    })

  })
})

export default counterAPIEndpoint;
