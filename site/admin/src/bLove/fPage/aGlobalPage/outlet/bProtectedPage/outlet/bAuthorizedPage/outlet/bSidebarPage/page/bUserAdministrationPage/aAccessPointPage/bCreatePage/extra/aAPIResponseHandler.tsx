import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import formSchema from "./cFormSchema";


const apiResponseHandler = {
  createAPIResponseHandler: async (data: z.infer<typeof formSchema>, ReduxCall: any, createAPITrigger: any, form: any, navigate: NavigateFunction, userAccountRetrieveAPITrigger: any) => {
    try {
      const serverResponse = await createAPITrigger({ body: {
        aImage: data.aImage,
        aTitle: data.aTitle,
        aSubtitle: data.aSubtitle,
        aDescription: data.aDescription,
        aDetail: data.aDetail,
        aStatus: data.aStatus,
        aState: data.aState,
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

        await apiResponseHandler.userAccountRetrieveAPIResponseHandler(userAccountRetrieveAPITrigger, ReduxCall, navigate)
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }
  },

  userAccountRetrieveAPIResponseHandler: async (userAccountRetrieveAPITrigger: any, ReduxCall: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await userAccountRetrieveAPITrigger();

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
        // form.reset();

        await ReduxCall.dispatch(
          ReduxCall.action.receivedObjectAction({
            AccountRetrieve: {
              ...ReduxCall.state.receivedObject?.AccountRetrieve,
              ...serverResponse.data.user_account_retrieve,
            }
          })
        )

        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute)
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }
  }
}

export default apiResponseHandler;
