import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectGroupPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectGroupPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-project-group-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminProjectGroupPageRetrieve"]
    }),

  })
})

export default adminProjectGroupPageAPIEndpoint;
