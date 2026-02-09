import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import AccountDeleteSecondaryComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/jAccountDeleteSecondaryComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import submitHandler from "./extra/bSubmitHandler";


const AccountDeleteSecondaryPage = () => {
  // Variable
  const retrievePrimaryAPIResponse = accountAPIEndpoint.useAccountRetrievePrimaryAPIQuery(null);
  const [ accountDeletePrimaryAPITrigger, accountDeletePrimaryAPIResponse ] = accountAPIEndpoint.useAccountDeletePrimaryAPIMutation();
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    retrieveAPIResponse: retrievePrimaryAPIResponse,
    deleteAPITrigger: accountDeletePrimaryAPITrigger,
    deleteAPIResponse: accountDeletePrimaryAPIResponse,
    userAccountRetrieveAPITrigger: accountRetrievePrimaryAPITrigger,
    userAccountRetrieveAPIResponse: accountRetrievePrimaryAPIResponse,
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* AccountDeleteSecondaryPage */}
      
      <AccountDeleteSecondaryComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AccountDeleteSecondaryPage;
