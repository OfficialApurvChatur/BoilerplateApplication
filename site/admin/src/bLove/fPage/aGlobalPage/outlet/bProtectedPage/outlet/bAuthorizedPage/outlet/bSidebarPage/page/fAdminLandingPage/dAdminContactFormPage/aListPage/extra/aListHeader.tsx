import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const listHeader = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Admin Contact Form List",
  subtitle: "An organized overview of foundational records",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Admin Contact Form", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.dAdminContactFormRoute.bCreateRoute },
  ]
})

export default listHeader;
