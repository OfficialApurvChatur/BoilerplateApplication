import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const pageHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Admin Branch Section Retrieve",
  subtitle: "This is just some subtitle for the admin branch section retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Admin Branch Section", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.dUpdateRoute}/${id}` },
    { text: "Delete Admin Branch Section", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.hAdminBranchSectionRoute.eDeleteRoute}/${id}` },
  ]
})

export default pageHeader;
