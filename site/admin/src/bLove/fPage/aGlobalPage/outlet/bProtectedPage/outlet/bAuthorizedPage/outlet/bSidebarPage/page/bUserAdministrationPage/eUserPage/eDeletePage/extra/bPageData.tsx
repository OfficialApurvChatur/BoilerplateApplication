const pageData = ({ retrieveAPIResponse }: { retrieveAPIResponse: any }) => (
  retrieveAPIResponse.isLoading ? null : 
  retrieveAPIResponse.isError ? null :
  retrieveAPIResponse.isSuccess ? (
    retrieveAPIResponse.data.success ? ([
      // Basic Information
      {
        display: true,
        title: "Basic Information",
        subtitle: "This is just some subtitle for the basic information...",
        fields: [
          { label: "Image", type: "image", value: retrieveAPIResponse.data.retrieve?.aImage },
          { label: "Title", type: "text", value: retrieveAPIResponse.data.retrieve?.aTitle },
          { label: "Subtitle", type: "text", value: retrieveAPIResponse.data.retrieve?.aSubtitle },
          { label: "Description", type: "text", value: retrieveAPIResponse.data.retrieve?.aDescription },
          { label: "Detail", type: "html", value: retrieveAPIResponse.data.retrieve?.aDetail },
          { label: "Status", type: "badge", value: retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive" },
          { label: "State", type: "badge", value: retrieveAPIResponse.data.retrieve?.aState },
          { label: "Slug", type: "text", value: retrieveAPIResponse.data.retrieve?.aSlug },
        ],  
      },
  
      // Personal Information
      {
        display: true,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        fields: [
          { label: "Created By", type: "by", value: retrieveAPIResponse.data.retrieve?.bCreatedBy },
          { label: "Created At", type: "at", value: retrieveAPIResponse.data.retrieve?.bCreatedAt },
          { label: "Updated By", type: "by", value: retrieveAPIResponse.data.retrieve?.bUpdatedBy },
          { label: "Updated At", type: "at", value: retrieveAPIResponse.data.retrieve?.bUpdatedAt },
        ],  
      },
  
      // Relation Information
      {
        display: true,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        fields: [
          { label: "Role", type: "text", value: retrieveAPIResponse.data.retrieve?.cRole?.aTitle },
        ],  
      },
  
      // More Information
      {
        display: false,
        title: "More Information",
        subtitle: "This is just some subtitle for the more information...",
        fields: [],  
      },
  
      // Critical Information
      {
        display: true,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        fields: [
          { label: "First Name", type: "text", value: retrieveAPIResponse.data.retrieve?.eFirstname },
          { label: "Last Name", type: "text", value: retrieveAPIResponse.data.retrieve?.eLastname },
          { label: "Email", type: "text", value: retrieveAPIResponse.data.retrieve?.eEmail },
          { label: "Mobile", type: "text", value: retrieveAPIResponse.data.retrieve?.eMobile },
        ],  
      },
  
    ]) : []
  ) : []
)

export default pageData;
