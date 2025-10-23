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
          { label: "Menu", type: "role-checkbox", value: 
            retrieveAPIResponse.data.retrieve?.cMenu
              ?.filter((each: any) => each.menu)
              ?.map((each: any) => {
                let itsMenu;
                let itsAccess: any[] = []; 

                // Check if each.menu._id exists, then assign
                if (each.menu._id) itsMenu = each.menu;

                // Map over cAccessPoint to build access points
                itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
                  // Find the matching access point from previousAccess
                  const access = each.access.find((access: any) => access.accessPoint === eachPoint._id);
                  
                  return {
                    accessPoint: eachPoint,
                    hasAccess: access ? access.hasAccess : false // Use default false if no match
                  };
                });

                // Return the menu and its updated access
                return {
                  menu: itsMenu,
                  access: itsAccess
                };
              }) 
          },
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

export default pageData;
