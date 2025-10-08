import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const listHeader = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Video Storage List",
  subtitle: "An organized overview of foundational records",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Video Storage", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.dFileStorageRoute.bVideoStorageRoute.bCreateRoute },
  ]
})

export default listHeader;
