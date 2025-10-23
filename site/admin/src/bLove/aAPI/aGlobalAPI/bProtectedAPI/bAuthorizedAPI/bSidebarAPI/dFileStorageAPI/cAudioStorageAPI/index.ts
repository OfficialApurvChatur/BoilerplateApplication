import apiConnection from "@/aConnection/cAPIConnection";


const audioStorageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    audioStorageListAPI: builder.query({
      query: () => ({
        url: `/audio-storage/list/`,
        method: "GET",
      }),
      providesTags: ["audioStorageList"]
    }),

    audioStorageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/audio-storage/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["audioStorageList"]
    }),

    audioStorageRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/audio-storage/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "audioStorageRetrieve", id: data.params._id }
      ]
    }),

    audioStorageUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/audio-storage/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "audioStorageList" },
        { type: "audioStorageRetrieve", id: data.params._id }
      ]
    }),

    audioStorageDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/audio-storage/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "audioStorageList" },
        { type: "audioStorageRetrieve", id: data.params._id }
      ]
    })

  })
})

export default audioStorageAPIEndpoint;
