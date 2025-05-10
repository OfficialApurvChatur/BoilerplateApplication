import apiConnection from "@/aConnection/cAPIConnection";


const adminAboutPageAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    adminAboutPageListAPI: builder.query({
      query: () => ({
        url: `admin-about-page/list/`,
        method: "GET",
      }),
      providesTags: ["adminAboutPageList"]
    }),

  })
})

export default adminAboutPageAPIEndpoint;
