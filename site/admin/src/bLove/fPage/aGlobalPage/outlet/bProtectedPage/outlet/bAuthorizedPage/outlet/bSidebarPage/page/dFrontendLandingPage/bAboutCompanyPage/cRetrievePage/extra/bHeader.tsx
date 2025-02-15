import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "About Company Retrieve",
  subtitle: "This is just some subtitle for the about company retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update About Company", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.dUpdateRoute}/${id}` },
    { text: "Delete About Company", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.bAboutCompanyRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
