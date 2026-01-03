import apiConnection from "@/aConnection/cAPIConnection";


const projectPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    projectPageRetrieveAPI: builder.query({
      query: () => ({
        url: `/project-page/retrieve`,
        method: "GET",
      }),
      providesTags: ["projectPageRetrieve"]
    }),

  })
})

export default projectPageAPIEndpoint;
