import apiConnection from "@/aConnection/cAPIConnection";


const projectGroupPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectGroupPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/project-group-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["projectGroupPageRetrieve"]
    }),

  })
})

export default projectGroupPageAPIEndpoint;
