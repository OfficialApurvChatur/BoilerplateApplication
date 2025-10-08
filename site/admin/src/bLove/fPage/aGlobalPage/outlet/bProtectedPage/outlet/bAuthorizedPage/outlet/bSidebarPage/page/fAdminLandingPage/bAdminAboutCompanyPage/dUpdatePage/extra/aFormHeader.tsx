import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const formHeader = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Admin About Comapany Update",
  subtitle: "This is just some subtitle for the admin about company update",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Delete Admin About Comapany", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.bAdminAboutCompanyRoute.eDeleteRoute}/${id}` },
  ]
})

export default formHeader;
