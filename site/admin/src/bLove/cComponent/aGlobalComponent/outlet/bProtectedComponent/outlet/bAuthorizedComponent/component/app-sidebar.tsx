import * as React from "react"
import { useLocation } from "react-router-dom"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Drum,
  Frame,
  GalleryVerticalEnd,
  List,
  Map,
  PieChart,
  PresentationIcon,
  ProjectorIcon,
  Settings2,
  SettingsIcon,
  SmileIcon,
  SquareTerminal,
  // TreePalmIcon
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

// This is sample data.
const data = {
  teams: [
    {
      name: "Boilerplate Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Boilerplate Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Boilerplate Corp.",
      logo: Command,
      plan: "Free",
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
      url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aDashboardRoute,
      icon: Frame,
      isActive: true,
      isCollapsible: false,
      isHighlighted: pathname === fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aDashboardRoute,
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
      title: "Frontend Landing",
      url: "#",
      icon: ProjectorIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/hero-") ||
        pathname.startsWith("/about-company-") ||
        pathname.startsWith("/contact-form-")
      ),
      items: [
        {
          title: "Hero",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.aListRoute,
          isBlue: pathname.startsWith("/hero-")
        },
        {
          title: "About Company",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.aListRoute,
          isBlue: pathname.startsWith("/about-company-")
        },
        {
          title: "Contact Form",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.cContactFormRoute.aListRoute,
          isBlue: pathname.startsWith("/contact-form-")
        },
      ],
    },
    {
      title: "Admin Landing",
      url: "#",
      icon: PresentationIcon,
      isActive: false,
      isCollapsible: true,
      isHighlighted: (
        pathname.startsWith("/admin-hero-") ||
        pathname.startsWith("/admin-about-company-") ||
        pathname.startsWith("/admin-contact-form-")
      ),
      items: [
        {
          title: "Hero",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.aAdminHeroRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-hero-")
        },
        {
          title: "About Company",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-about-company-")
        },
        {
          title: "Contact Form",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.aListRoute,
          isBlue: pathname.startsWith("/admin-contact-form-")
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
        pathname.startsWith("/profile-") ||
        pathname.startsWith("/user-") ||
        pathname.startsWith("/role-") ||
        pathname.startsWith("/menu-") ||
        pathname.startsWith("/access-point-")
      ),
      items: [
        {
          title: "Profile",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.aListRoute,
          isBlue: pathname.startsWith("/profile-")
        },
        {
          title: "User",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.aListRoute,
          isBlue: pathname.startsWith("/user-")
        },
        {
          title: "Role",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.aListRoute,
          isBlue: pathname.startsWith("/role-")
        },
        {
          title: "Menu",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute,
          isBlue: pathname.startsWith("/menu-")
        },
        {
          title: "Access Point",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute,
          isBlue: pathname.startsWith("/access-point-")
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
          title: "Activity Log",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.bActivityLogRoute.aListRoute,
          isBlue: pathname.startsWith("/activity-log-")
        },
        {
          title: "API Log",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.cAPILogRoute.aListRoute,
          isBlue: pathname.startsWith("/api-log-")
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

export function AppSidebar({ ReduxCall, APICall, submitHandler, ...props }: React.ComponentProps<typeof Sidebar> & { ReduxCall: any, APICall: any, submitHandler: any }) {
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
        <NavMain header="Static Component" items={data.forStaticComponent(pathname)} />
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser ReduxCall={ReduxCall} APICall={APICall} submitHandler={submitHandler} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
