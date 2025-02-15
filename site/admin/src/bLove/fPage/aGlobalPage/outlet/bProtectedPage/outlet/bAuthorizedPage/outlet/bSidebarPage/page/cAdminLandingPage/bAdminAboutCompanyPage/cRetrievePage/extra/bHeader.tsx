import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Admin About Company Retrieve",
  subtitle: "This is just some subtitle for the admin about company retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Admin About Company", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.dUpdateRoute}/${id}` },
    { text: "Delete Admin About Company", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.bAdminAboutCompanyRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
