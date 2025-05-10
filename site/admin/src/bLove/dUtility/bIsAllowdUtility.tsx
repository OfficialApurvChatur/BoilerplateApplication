const isAllowedUtility = ( reduxUltimate: any, model: string, route: string ): boolean => {
  
  const cMenu = (reduxUltimate.state.receivedObject as any)?.AccountRetrieve?.cRole?.cMenu
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

  // Find Menu
  const selectedMenu = cMenu?.find((each: any) => {
    return each?.menu?.aTitle === model
  })

  // Find Access Point
  const selectedAccessPoint = selectedMenu?.access?.find((each: any) => {
    return each?.accessPoint?.aTitle === route
  })

  // Access Denied
  // if (!selectedAccessPoint?.hasAccess) return next(new ErrorUtility('You are not authorized to access this route', 403));
  // console.log(selectedAccessPoint)
  
  return selectedAccessPoint?.hasAccess || false
};

const isAllowedConstant = {
  base: "Base",
  activityLog: "Activity Log",
  apiLog: "API Log",
  
  accessPoint: "Access Point",
  menu: "Menu",
  role: "Role",
  user: "User",
  profile: "Profile",
  
  adminHero: "Admin Hero",
  adminAboutCompany: "Admin About Company",
  adminContactForm: "Admin Contact Form",

  hero: "Hero",
  aboutCompany: "About Company",
  contactForm: "Contact Form",
}

export default isAllowedUtility;
export { isAllowedConstant };
