import * as React from "react"
import { useLocation } from "react-router-dom"

import {
  AppWindowIcon,
  AudioWaveform,
  BookOpen,
  Bot,
  CloudUploadIcon,
  Command,
  Drum,
  Frame,
  GalleryVerticalEnd,
  KeyRoundIcon,
  LayoutDashboardIcon,
  List,
  Map,
  PieChart,
  SendIcon,
  Settings2,
  SettingsIcon,
  Shield,
  SmileIcon,
  SquareTerminal,
  TableOfContentsIcon,
} from "lucide-react"

import { NavMain } from "./nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import brandConnection from "@/aConnection/eBrandConnection"

const data = {
  teams: [
    {
      name: brandConnection.cFrontendApplicationName,
      logo: GalleryVerticalEnd,
      plan: "Frontend",
      url: brandConnection.fFrontendApplicationURL,
    },
    {
      name: brandConnection.dAdministrationApplicationName,
      logo: AudioWaveform,
      plan: "Administration",
      url: fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute,
    },
    {
      name: brandConnection.eBackendApplicationName,
      logo: Command,
      plan: "Backend",
      url: brandConnection.hBackendApplicationURL,
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  forDynamicComponent: (pathname: string) =>[
    {
      title: "Dashboard",
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute,
      icon: LayoutDashboardIcon,
      isActive: true,
      isCollapsible: false,
      isHighlighted: pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hMainRoute.aDashboardRoute,
      items: [],
    },
    // {
    //   title: "Main",
    //   url: "#",
    //   icon: TreePalmIcon,
    //   isActive: false,
    //   isCollapsible: true,
    //   // isHighlighted: null,
    //   items: [],
    // },
    {
      title: "Chat Management",
      url: "#",
      icon: SendIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/chat-") ||
        pathname.startsWith("/message-") ||
        pathname.startsWith("/request-")
      ),
      items: [
        {
          title: "Chat",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.aChatRoute.aListRoute,
          isBlue: pathname.startsWith("/chat-")
        },
        {
          title: "Message",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.aListRoute,
          isBlue: pathname.startsWith("/message-")
        },
        {
          title: "Request",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.aListRoute,
          isBlue: pathname.startsWith("/request-")
        },
      ],
    },
    {
      title: "Frontend Landing",
      url: "#",
      icon: AppWindowIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/hero-") ||
        pathname.startsWith("/about-company-") ||
        pathname.startsWith("/about-application-") ||
        pathname.startsWith("/contact-form-") ||
        pathname.startsWith("/contact-info-") ||
        pathname.startsWith("/counter-") ||
        pathname.startsWith("/service-") ||
        pathname.startsWith("/branch-section-") ||
        pathname.startsWith("/branch-group-") ||
        pathname.startsWith("/branch-") ||
        pathname.startsWith("/project-section-") ||
        pathname.startsWith("/project-group-") ||
        pathname.startsWith("/project-")
      ),
      items: [
        {
          title: "Hero",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.aHeroRoute.aListRoute,
          isBlue: pathname.startsWith("/hero-")
        },
        {
          title: "About Company",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.bAboutCompanyRoute.aListRoute,
          isBlue: pathname.startsWith("/about-company-")
        },
        {
          title: "About Application",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.cAboutApplicationRoute.aListRoute,
          isBlue: pathname.startsWith("/about-application-")
        },
        {
          title: "Contact Form",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.dContactFormRoute.aListRoute,
          isBlue: pathname.startsWith("/contact-form-")
        },
        {
          title: "Contact Info",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.eContactInfoRoute.aListRoute,
          isBlue: pathname.startsWith("/contact-info-")
        },
        {
          title: "Counter",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.fCounterRoute.aListRoute,
          isBlue: pathname.startsWith("/counter-")
        },
        {
          title: "Service",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.gServiceRoute.aListRoute,
          isBlue: pathname.startsWith("/service-")
        },
        {
          title: "Branch Section",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.hBranchSectionRoute.aListRoute,
          isBlue: pathname.startsWith("/branch-section-")
        },
        {
          title: "Branch Group",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.iBranchGroupRoute.aListRoute,
          isBlue: pathname.startsWith("/branch-group-")
        },
        {
          title: "Branch",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.jBranchRoute.aListRoute,
          isBlue: pathname.startsWith("/branch-")
        },
        {
          title: "Project Section",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.kProjectSectionRoute.aListRoute,
          isBlue: pathname.startsWith("/project-section-")
        },
        {
          title: "Project Group",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.lProjectGroupRoute.aListRoute,
          isBlue: pathname.startsWith("/project-group-")
        },
        {
          title: "Project",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.gFrontendLandingRoute.mProjectRoute.aListRoute,
          isBlue: pathname.startsWith("/project-")
        },
      ],
    },
    {
      title: "Admin Landing",
      url: "#",
      icon: Shield,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/admin-hero-") ||
        pathname.startsWith("/admin-about-company-") ||
        pathname.startsWith("/admin-about-application-") ||
        pathname.startsWith("/admin-contact-form-") ||
        pathname.startsWith("/admin-contact-info-") ||
        pathname.startsWith("/admin-counter-") ||
        pathname.startsWith("/admin-service-") ||
        pathname.startsWith("/admin-branch-section-") ||
        pathname.startsWith("/admin-branch-group-") ||
        pathname.startsWith("/admin-branch-") ||
        pathname.startsWith("/admin-project-section-") ||
        pathname.startsWith("/admin-project-group-") ||
        pathname.startsWith("/admin-project-")
      ),
      items: [
        {
          title: "Hero",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.aAdminHeroRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-hero-")
        },
        {
          title: "About Company",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-about-company-")
        },
        {
          title: "About Application",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-about-application-")
        },
        {
          title: "Contact Form",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-contact-form-")
        },
        {
          title: "Contact Info",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.eAdminContactInfoRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-contact-info-")
        },
        {
          title: "Counter",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.fAdminCounterRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-counter-")
        },
        {
          title: "Service",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.gAdminServiceRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-service-")
        },
        {
          title: "Branch Section",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-branch-section-")
        },
        {
          title: "Branch Group",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.iAdminBranchGroupRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-branch-group-")
        },
        {
          title: "Branch",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.jAdminBranchRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-branch-")
        },
        {
          title: "Project Section",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.kAdminProjectSectionRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-project-section-")
        },
        {
          title: "Project Group",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.lAdminProjectGroupRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-project-group-")
        },
        {
          title: "Project",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.mAdminProjectRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-project-")
        },
      ],
    },
    {
      title: "Content Operation",
      url: "#",
      icon: TableOfContentsIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/static-content-") ||
        pathname.startsWith("/social-media-content-")
      ),
      items: [
        {
          title: "Static Content",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.aStaticContentRoute.aListRoute,
          isBlue: pathname.startsWith("/static-content-")
        },
        {
          title: "Social Media Content",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.eContentOperationRoute.bSocialMediaContentRoute.aListRoute,
          isBlue: pathname.startsWith("/social-media-content-")
        },
      ],
    },
    {
      title: "File Storage",
      url: "#",
      icon: CloudUploadIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/image-storage-") ||
        pathname.startsWith("/video-storage-")
      ),
      items: [
        {
          title: "Image Storage",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.aImageStorageRoute.aListRoute,
          isBlue: pathname.startsWith("/image-storage-")
        },
        {
          title: "Video Storage",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.aListRoute,
          isBlue: pathname.startsWith("/video-storage-")
        },
        {
          title: "Audio Storage",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.cAudioStorageRoute.aListRoute,
          isBlue: pathname.startsWith("/audio-storage-")
        },
      ],
    },
    {
      title: "User Authentication",
      url: "#",
      icon: KeyRoundIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/sign-in-") ||
        pathname.startsWith("/sign-up-") ||
        pathname.startsWith("/sign-out-") ||
        pathname.startsWith("/forgot-password-") ||
        pathname.startsWith("/reset-password-")
      ),
      items: [
        {
          title: "Sign In",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.aSignInRoute.aListRoute,
          isBlue: pathname.startsWith("/sign-in-")
        },
        {
          title: "Sign Up",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.bSignUpRoute.aListRoute,
          isBlue: pathname.startsWith("/sign-up-")
        },
        {
          title: "Sign Out",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.aListRoute,
          isBlue: pathname.startsWith("/sign-out-")
        },
        {
          title: "Forgot Password",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.dForgotPasswordRoute.aListRoute,
          isBlue: pathname.startsWith("/forgot-password-")
        },
        {
          title: "Reset Password",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.eResetPasswordRoute.aListRoute,
          isBlue: pathname.startsWith("/reset-password-")
        },
      ],
    },
    {
      title: "User Administration",
      url: "#",
      icon: SmileIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/access-point-") ||
        pathname.startsWith("/menu-") ||
        pathname.startsWith("/permission-") ||
        pathname.startsWith("/role-") ||
        pathname.startsWith("/user-") ||
        pathname.startsWith("/profile-") ||
        pathname.startsWith("/account-")
      ),
      items: [
        {
          title: "Access Point",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute,
          isBlue: pathname.startsWith("/access-point-")
        },
        {
          title: "Menu",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute,
          isBlue: pathname.startsWith("/menu-")
        },
        {
          title: "Permission",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cPermisssionRoute.aListRoute,
          isBlue: pathname.startsWith("/permission-")
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dRoleRoute.aListRoute,
          isBlue: pathname.startsWith("/role-")
        },
        {
          title: "User",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.aListRoute,
          isBlue: pathname.startsWith("/user-")
        },
        {
          title: "Profile",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.fProfileRoute.aListRoute,
          isBlue: pathname.startsWith("/profile-")
        },
        {
          title: "Account",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.gAccountRoute.aListRoute,
          isBlue: pathname.startsWith("/account-")
        },
      ],
    },
    {
      title: "Setting",
      url: "#",
      icon: SettingsIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/base-") ||
        pathname.startsWith("/activity-log-") ||
        pathname.startsWith("/api-log-")
      ),
      items: [
        {
          title: "Base",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute,
          isBlue: pathname.startsWith("/base-")
        },
        {
          title: "API Log",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bAPILogRoute.aListRoute,
          isBlue: pathname.startsWith("/api-log-")
        },
        {
          title: "Activity Log",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cActivityLogRoute.aListRoute,
          isBlue: pathname.startsWith("/activity-log-")
        },
      ],
    },
  ],
  forStaticComponent: (pathname: string) =>[
    {
      title: "Dashboard",
      url: "/dashboard-one",
      icon: Frame,
      isActive: false,
      isCollapsible: false,
      isHighlighted: pathname === "/dashboard-one",
      items: [],
    },
    {
      title: "Charts",
      url: "#",
      icon: PieChart,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname === "/area-chart" ||
        pathname === "/bar-chart" ||
        pathname === "/line-chart" ||
        pathname === "/pie-chart" ||
        pathname === "/radar-chart" ||
        pathname === "/radial-chart" ||
        pathname === "/tooltip"
      ),
      items: [
        {
          title: "Area Chart",
          url: "/area-chart",
          isBlue: pathname === "/area-chart"
        },
        {
          title: "Bar Chart",
          url: "/bar-chart",
          isBlue: pathname === "/bar-chart"
        },
        {
          title: "Line Chart",
          url: "/line-chart",
          isBlue: pathname === "/line-chart"
        },
        {
          title: "Pie Chart",
          url: "/pie-chart",
          isBlue: pathname === "/pie-chart"
        },
        {
          title: "Radar Chart",
          url: "/radar-chart",
          isBlue: pathname === "/radar-chart"
        },
        {
          title: "Radial Chart",
          url: "/radial-chart",
          isBlue: pathname === "/radial-chart"
        },
        {
          title: "Tooltip",
          url: "/tooltip",
          isBlue: pathname === "/tooltip"
        },
      ],
    },
    {
      title: "Data Tables",
      url: "/data-table-one",
      icon: List,
      isActive: false,
      isCollapsible: false,
      isHighlighted: pathname === "/data-table-one",
      items: [],
    },
    {
      title: "Data Forms",
      url: "/data-form-one",
      icon: Drum,
      isActive: false,
      isCollapsible: false,
      isHighlighted: pathname === "/data-form-one",
      items: [],
    },
    {
      title: "Authentication",
      url: "/authentication-one",
      icon: Drum,
      isActive: false,
      isCollapsible: false,
      isHighlighted: pathname === "/authentication-one",
      items: [],
    },
    {
      title: "Basic",
      url: "#",
      icon: BookOpen,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname === "/loader" ||
        pathname === "/page-not-found" ||
        pathname === "/no-internet-connection"
      ),
      items: [
        {
          title: "Loader",
          url: "/loader",
          isBlue: pathname === "/loader"
        },
        {
          title: "Page Not Found",
          url: "/page-not-found",
          isBlue: pathname === "/page-not-found"
        },
        {
          title: "No Internet Connection",
          url: "/no-internet-connection",
          isBlue: pathname === "/no-internet-connection"
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ reduxCall, apiHandler, ...props }: React.ComponentProps<typeof Sidebar> & { reduxCall: any, apiHandler: any }) {
  // Variable
  const { pathname } = useLocation();
  
  // JSX
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain header="Dynamic Component" items={data.forDynamicComponent(pathname)} />
        {/* <NavMain header="Static Component" items={data.forStaticComponent(pathname)} /> */}
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser reduxCall={reduxCall} apiHandler={apiHandler} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
