const previousValue = (form: any, APICall: any) => {
  const cMenuUpdated = APICall.retrieveAPIResponse.data.retrieve?.cMenu
    ?.filter((each: any) => each.menu)
    ?.map((each: any) => {
      let itsMenu;
      let itsAccess: any[] = []; 

      // Check if each.menu._id exists, then assign
      if (each.menu._id) itsMenu = each.menu._id;

      // Map over cAccessPoint to build access points
      itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
        // Find the matching access point from previousAccess
        const access = each.access.find((access: any) => access.accessPoint === eachPoint._id);
        
        return {
          accessPoint: eachPoint._id,
          hasAccess: access ? access.hasAccess : false // Use default false if no match
        };
      });

      // Return the menu and its updated access
      return {
        menu: itsMenu,
        access: itsAccess
      };
    });

  return (
    form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
    form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),
    form.setValue("aSubtitle", APICall.retrieveAPIResponse.data.retrieve?.aSubtitle),
    form.setValue("aDescription", APICall.retrieveAPIResponse.data.retrieve?.aDescription),
    form.setValue("aDetail", APICall.retrieveAPIResponse.data.retrieve?.aDetail),
    form.setValue("aStatus", APICall.retrieveAPIResponse.data.retrieve?.aStatus ? "Active" : "Inactive"),
    form.setValue("aState", APICall.retrieveAPIResponse.data.retrieve?.aState),
  
    form.setValue("cMenu", cMenuUpdated)
  )
}

export default previousValue;
