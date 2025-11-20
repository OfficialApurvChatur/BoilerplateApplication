import { NavigateFunction } from "react-router-dom";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const apiHandler = {
  retrieveAPIHandler: (retrieveAPIResponse: any) => {
    // Handle loading
    if (retrieveAPIResponse.isLoading || retrieveAPIResponse.isFetching) return;

    // Handle error
    if (retrieveAPIResponse.isError) {
      if (retrieveAPIResponse.error && retrieveAPIResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        });
      } else if (retrieveAPIResponse.error && retrieveAPIResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: retrieveAPIResponse.error?.data.message || "There was an error.",
        });
      } else {
        return toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred.",
        });
      }
      return;
    }

    // Handle success
    if (retrieveAPIResponse.isSuccess && retrieveAPIResponse.data?.success) {
      return toast({
        variant: "default",
        title: "Yayy! Congratulations...",
        description: retrieveAPIResponse.data.message || "Something loaded successfully.",
      });
    }

  },

  deleteAPIHandler: (
    (deleteAPITrigger: any) =>
    (reduxCall: any) => 
    (navigate: NavigateFunction) => 
    (accountRetrievePrimaryAPITrigger?: any) => 
    (params: any) => 
    (async () => {
      try {
        const serverResponse = await deleteAPITrigger({ 
          params: { _id: params.id },
        });

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

          await apiHandler.accountRetrievePrimaryAPIHandler(accountRetrievePrimaryAPITrigger, reduxCall, navigate)
        }

        return;

      } catch (error: any) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Bad code... Bad code.",
          description: "There was a problem with try block code",
        })
      }
    })
  ),

  accountRetrievePrimaryAPIHandler: async (accountRetrievePrimaryAPITrigger: any, reduxCall: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await accountRetrievePrimaryAPITrigger();

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

        await reduxCall.dispatch(
          reduxCall.action.receivedObjectAction({
            AccountRetrieve: {
              ...reduxCall.state.receivedObject?.AccountRetrieve,
              ...serverResponse.data.user_account_retrieve,
            }
          })
        )
  
        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eUserRoute.aListRoute)
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

export default apiHandler;
