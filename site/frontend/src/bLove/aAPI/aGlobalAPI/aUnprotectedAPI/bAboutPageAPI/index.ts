import apiConnection from "@/aConnection/cAPIConnection";


const aboutPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    aboutPageListAPI: builder.query({
      query: () => ({
        url: `about-page/list/`,
        method: "GET",
      }),
      providesTags: ["aboutPageList"]
    }),

  })
})

export default aboutPageAPIEndpoint;
