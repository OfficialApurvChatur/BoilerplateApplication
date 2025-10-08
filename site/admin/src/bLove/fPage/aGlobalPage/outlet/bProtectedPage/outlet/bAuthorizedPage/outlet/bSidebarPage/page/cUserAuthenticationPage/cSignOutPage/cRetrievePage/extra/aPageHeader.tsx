import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Sign Out Retrieve",
  subtitle: "This is just some subtitle for the sign out retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Sign Out", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.dUpdateRoute}/${id}` },
    { text: "Delete Sign Out", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cUserAuthenticationRoute.cSignOutRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
