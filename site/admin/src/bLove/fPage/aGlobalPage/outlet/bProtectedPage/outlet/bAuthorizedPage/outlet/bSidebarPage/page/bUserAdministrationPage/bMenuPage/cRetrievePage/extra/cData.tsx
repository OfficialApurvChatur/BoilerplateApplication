const data = ({ retrieveAPIResponse }: { retrieveAPIResponse: any }) => (
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
          { label: "Image", type: "image", value: retrieveAPIResponse.data.retrieve.aImage },
          { label: "Title", type: "text", value: retrieveAPIResponse.data.retrieve.aTitle },
        ],  
      },
  
      // Personal Information
      {
        display: true,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        fields: [
          { label: "Created By", type: "by", value: retrieveAPIResponse.data.retrieve.bCreatedBy },
          { label: "Created At", type: "at", value: retrieveAPIResponse.data.retrieve.bCreatedAt },
          { label: "Updated By", type: "by", value: retrieveAPIResponse.data.retrieve.bUpdatedBy },
          { label: "Updated At", type: "at", value: retrieveAPIResponse.data.retrieve.bUpdatedAt },
        ],  
      },
  
      // Relation Information
      {
        display: true,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        fields: [
          { label: "Access Point", type: "text", value: retrieveAPIResponse.data.retrieve.cAccessPoint?.map((each: any) => each.aTitle).join(", ") },
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
        display: false,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        fields: [],  
      },
  
    ]) : []
  ) : []
)

export default data;
