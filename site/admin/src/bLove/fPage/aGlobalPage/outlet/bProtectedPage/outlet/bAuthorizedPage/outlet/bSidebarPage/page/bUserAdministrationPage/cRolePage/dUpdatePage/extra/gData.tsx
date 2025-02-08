const data = ({ retrieveAPIResponse, APICall }: { retrieveAPIResponse: any, APICall: any }) => (
  retrieveAPIResponse.isLoading ? null : 
  retrieveAPIResponse.isError ? null :
  retrieveAPIResponse.isSuccess ? (
    retrieveAPIResponse.data.success ? ([
      // Basic Information
      {
        display: true,
        title: "Basic Information",
        subtitle: "This is just some subtitle for the basic information...",
        inputs: [
          { name: "aImage", label: "Image", type: "image", folderName: "role" },
          { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        ],  
      },

      // Personal Information
      {
        display: true,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        inputs: [
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
        inputs: [
          { name: "cMenu", label: "Menu", type: "role-checkbox", 
            options: 
              APICall.menuListAPIResponse.isLoading ? null : 
              APICall.menuListAPIResponse.isError ? null :
                APICall.menuListAPIResponse.isSuccess ? (
                  APICall.menuListAPIResponse.data.success ? (
                    APICall.menuListAPIResponse.data.list.length > 0 ? (
                      APICall.menuListAPIResponse.data.list.map((each: any) => ({
                        value: each._id, label: each.aTitle, cAccessPoint: each.cAccessPoint
                      }))
                    ) : []
                  ) : []
                ) : []
          },  
        ],  
      },

      // More Information
      {
        display: false,
        title: "More Information",
        subtitle: "This is just some subtitle for the more information...",
        inputs: [],  
      },

      // Critical Information
      {
        display: false,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        inputs: [],  
      },
      
    ]) : []
  ) : []
)

export default data;
