import apiConnection from "@/aConnection/cAPIConnection";


const adminProjectPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminProjectPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/admin-project-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["adminProjectPageRetrieve"]
    }),

  })
})

export default adminProjectPageAPIEndpoint;
