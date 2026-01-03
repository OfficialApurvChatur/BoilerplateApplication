import apiConnection from "@/aConnection/cAPIConnection";


const messageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    messageListAPI: builder.query({
      query: () => ({
        url: `/message/list/`,
        method: "GET",
      }),
      providesTags: ["messageList"]
    }),

    messageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/message/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["messageList"]
    }),

    messageRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/message/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "messageRetrieve", id: data.params._id }
      ]
    }),

    messageUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/message/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "messageList" },
        { type: "messageRetrieve", id: data.params._id }
      ]
    }),

    messageDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/message/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "messageList" },
        { type: "messageRetrieve", id: data.params._id }
      ]
    })

  })
})

export default messageAPIEndpoint;
