import apiConnection from "@/aConnection/cAPIConnection";


const branchAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    branchListAPI: builder.query({
      query: () => ({
        url: `/branch/list/`,
        method: "GET",
      }),
      providesTags: ["branchList"]
    }),

    branchCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/branch/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["branchList"]
    }),

    branchRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/branch/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchRetrieve", id: data.params._id }
      ]
    }),

    branchUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/branch/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "branchList" },
        { type: "branchRetrieve", id: data.params._id }
      ]
    }),

    branchDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/branch/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "branchList" },
        { type: "branchRetrieve", id: data.params._id }
      ]
    }),

    branchListMiniAPI: builder.query({
      query: () => ({
        url: `/branch/list-mini/`,
        method: "GET",
      }),
      providesTags: ["branchListMini"]
    }),

  })
})

export default branchAPIEndpoint;
