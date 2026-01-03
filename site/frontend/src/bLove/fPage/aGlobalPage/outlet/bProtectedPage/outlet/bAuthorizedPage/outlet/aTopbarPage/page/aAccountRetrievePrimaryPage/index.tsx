import React, { useEffect } from "react"

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import AccountRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/aAccountRetrievePrimaryComponent";

import apiHandler from "./extra/aAPIHandler";


const AccountRetrievePrimaryPage = () => {
  // Variable
  const accountRetrievePrimaryAPIResponse = accountAPIEndpoint.useAccountRetrievePrimaryAPIQuery(null);
  
  // API Call
  const apiCall = {
    retrieveAPIResponse: accountRetrievePrimaryAPIResponse
  }
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrievePrimaryAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* AccountRetrievePrimaryPage */}
      <AccountRetrieveComponent 
        apiCall={apiCall} 
      />
    </React.Fragment>
  )
}

export default AccountRetrievePrimaryPage;
