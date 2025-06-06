import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Admin Contact Form Retrieve",
  subtitle: "This is just some subtitle for the admin contact form retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Admin Contact Form", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.dUpdateRoute}/${id}` },
    { text: "Delete Admin Contact Form", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cAdminLanding.cAdminContactFormRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
