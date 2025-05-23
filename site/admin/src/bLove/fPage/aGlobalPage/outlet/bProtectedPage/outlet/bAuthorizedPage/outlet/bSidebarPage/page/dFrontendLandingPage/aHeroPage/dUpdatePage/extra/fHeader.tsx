import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Hero Update",
  subtitle: "This is just some subtitle for the hero update",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Delete Hero", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFrontendLanding.aHeroRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
