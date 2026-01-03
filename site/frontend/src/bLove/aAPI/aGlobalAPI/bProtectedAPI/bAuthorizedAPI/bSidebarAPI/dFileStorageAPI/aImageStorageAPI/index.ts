import apiConnection from "@/aConnection/cAPIConnection";


const imageStorageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    imageStorageListAPI: builder.query({
      query: () => ({
        url: `/image-storage/list/`,
        method: "GET",
      }),
      providesTags: ["imageStorageList"]
    }),

    imageStorageCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/image-storage/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["imageStorageList"]
    }),

    imageStorageRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/image-storage/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "imageStorageRetrieve", id: data.params._id }
      ]
    }),

    imageStorageUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/image-storage/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "imageStorageList" },
        { type: "imageStorageRetrieve", id: data.params._id }
      ]
    }),

    imageStorageDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/image-storage/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "imageStorageList" },
        { type: "imageStorageRetrieve", id: data.params._id }
      ]
    })

  })
})

export default imageStorageAPIEndpoint;
