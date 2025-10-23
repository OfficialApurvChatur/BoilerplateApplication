import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Message Retrieve",
  subtitle: "This is just some subtitle for the message retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Message", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.dUpdateRoute}/${id}` },
    { text: "Delete Message", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.hChatManagementRoute.bMessageRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
