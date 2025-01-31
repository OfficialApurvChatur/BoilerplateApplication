import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


export const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Policy List",
  subtitle: "This is just some subtitle for the policy list",
  buttons: [
    { text: "Refetch", icon: RefreshCcw, action: listAPIResponse.refetch },
    { text: "Create Policy", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.bPolicyRoute.bCreateRoute },
  ]
})
