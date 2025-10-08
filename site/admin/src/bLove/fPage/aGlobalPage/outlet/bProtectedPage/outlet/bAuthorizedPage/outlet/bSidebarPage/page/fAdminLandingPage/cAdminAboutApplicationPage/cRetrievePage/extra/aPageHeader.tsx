import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Admin About Application Retrieve",
  subtitle: "This is just some subtitle for the admin about application retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Admin About Application", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.dUpdateRoute}/${id}` },
    { text: "Delete Admin About Application", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
