import apiConnection from "@/aConnection/cAPIConnection";


const heroAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    heroListAPI: builder.query({
      query: () => ({
        url: `/hero/list/`,
        method: "GET",
      }),
      providesTags: ["heroList"]
    }),

    heroCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/hero/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["heroList"]
    }),

    heroRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/hero/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "heroRetrieve", id: data.params._id }
      ]
    }),

    heroUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/hero/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "heroList" },
        { type: "heroRetrieve", id: data.params._id }
      ]
    }),

    heroDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/hero/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "heroList" },
        { type: "heroRetrieve", id: data.params._id }
      ]
    })

  })
})

export default heroAPIEndpoint;
