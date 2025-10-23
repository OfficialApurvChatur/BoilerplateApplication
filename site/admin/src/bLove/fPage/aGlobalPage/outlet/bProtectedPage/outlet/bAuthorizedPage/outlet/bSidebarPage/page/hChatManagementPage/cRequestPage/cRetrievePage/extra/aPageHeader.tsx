import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Request Retrieve",
  subtitle: "This is just some subtitle for the request retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Request", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.dUpdateRoute}/${id}` },
    { text: "Delete Request", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.cRequestRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
