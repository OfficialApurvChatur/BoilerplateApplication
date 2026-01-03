import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import formValueSchema from "./cFormValueSchema";


const apiHandler = {
  createAPIHandler: (
    (createAPITrigger: any) => 
    (navigate: NavigateFunction) => 
    (form: any) => 
    (submittedData: z.infer<typeof formValueSchema>) => 
    (async () => {
      try {
        const serverResponse = await createAPITrigger({ body: {
          aImage: submittedData.aImage,
          aTitle: submittedData.aTitle,
          aSubtitle: submittedData.aSubtitle,
          aDescription: submittedData.aDescription,
          aDetail: submittedData.aDetail,
          aStatus: submittedData.aStatus,
          aState: submittedData.aState,

          dTechIcon: submittedData.dTechIcon,
        } });

        // console.log(serverResponse)

        if (serverResponse.error && serverResponse.error.originalStatus === 404) {
          return toast({
            variant: "destructive",
            title: "Uh oh! Cannot connect with server.",
            description: "There was a problem with server connection.",
          })  
        } 
        
        if (serverResponse.error && serverResponse.error?.data?.success === false) {
          return toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: serverResponse.error.data.message || "There was an error occured.",
          })  
        }

        if (serverResponse.data && serverResponse.data?.success === true) {
          toast({
            variant: "default",
            title: "Yayy! Congratulations...",
            description: serverResponse.data.message,
          })
          form.reset();

          return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.fAdminLandingRoute.cAdminAboutApplicationRoute.aListRoute)
        }

        return;

      } catch (error: any) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Bad code... Bad code.",
          description: "There was a problem with try block code",
        })
      }
    })()
  )
}

export default apiHandler;
