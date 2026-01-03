import apiConnection from "@/aConnection/cAPIConnection";


const projectSectionPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectSectionPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/project-section-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["projectSectionPageRetrieve"]
    }),

  })
})

export default projectSectionPageAPIEndpoint;
