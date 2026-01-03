const isAllowedUtility = ( reduxUltimate: any, model: string, route: string ): boolean => {
  
  const cMenu = (reduxUltimate.state.receivedObject as any)?.AccountRetrieve?.cRole?.cPermission?.cMenu
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
  activityLog: "ActivityLog",
  apiLog: "APILog",
  
  accessPoint: "AccessPoint",
  menu: "Menu",
  permission: "Permission",
  role: "Role",
  user: "User",
  profile: "Profile",
  account: "Account",

  signIn: "SignIn",
  signUp: "SignUp",
  signOut: "SignOut",
  forgotPassword: "ForgotPassword",
  resetPassword: "ResetPassword",

  imageStorage: "ImageStorage",
  videoStorage: "VideoStorage",
  audioStorage: "AudioStorage",
  
  staticContent: "StaticContent",
  socialMediaContent: "SocialMediaContent",

  adminHero: "AdminHero",
  adminAboutCompany: "AdminAboutCompany",
  adminAboutApplication: "AdminAboutApplication",
  adminContactForm: "AdminContactForm",
  adminContactInfo: "AdminContactInfo",
  adminCounter: "AdminCounter",
  adminService: "AdminService",
  adminBranchSection: "AdminBranchSection",
  adminBranchGroup: "AdminBranchGroup",
  adminBranch: "AdminBranch",
  adminProjectSection: "AdminProjectSection",
  adminProjectGroup: "AdminProjectGroup",
  adminProject: "AdminProject",

  hero: "Hero",
  aboutCompany: "AboutCompany",
  aboutApplication: "AboutApplication",
  contactForm: "ContactForm",
  contactInfo: "ContactInfo",
  counter: "Counter",
  service: "Service",
  branchSection: "BranchSection",
  branchGroup: "BranchGroup",
  branch: "Branch",
  projectSection: "ProjectSection",
  projectGroup: "ProjectGroup",
  project: "Project",

  chat: "Chat",
  message: "Message",
  request: "Request",
}

export default isAllowedUtility;
export { isAllowedConstant };
