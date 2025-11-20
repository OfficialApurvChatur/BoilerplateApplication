import apiConnection from "@/aConnection/cAPIConnection";


const videoStorageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    videoStorageListAPI: builder.query({
      query: () => ({
        url: `/video-storage/list/`,
        method: "GET",
      }),
      providesTags: ["videoStorageList"]
    }),

    videoStorageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/video-storage/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["videoStorageList"]
    }),

    videoStorageRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/video-storage/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "videoStorageRetrieve", id: data.params._id }
      ]
    }),

    videoStorageUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/video-storage/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "videoStorageList" },
        { type: "videoStorageRetrieve", id: data.params._id }
      ]
    }),

    videoStorageDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/video-storage/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "videoStorageList" },
        { type: "videoStorageRetrieve", id: data.params._id }
      ]
    })

  })
})

export default videoStorageAPIEndpoint;
