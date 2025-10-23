import apiConnection from "@/aConnection/cAPIConnection";


const chatAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    chatListAPI: builder.query({
      query: () => ({
        url: `/chat/list/`,
        method: "GET",
      }),
      providesTags: ["chatList"]
    }),

    chatCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/chat/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["chatList"]
    }),

    chatRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/chat/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "chatRetrieve", id: data.params._id }
      ]
    }),

    chatUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/chat/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "chatList" },
        { type: "chatRetrieve", id: data.params._id }
      ]
    }),

    chatDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/chat/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "chatList" },
        { type: "chatRetrieve", id: data.params._id }
      ]
    })

  })
})

export default chatAPIEndpoint;
