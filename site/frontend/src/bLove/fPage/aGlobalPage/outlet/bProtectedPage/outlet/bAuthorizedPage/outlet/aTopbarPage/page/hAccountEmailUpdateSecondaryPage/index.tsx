import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import AccountEmailUpdateSecondaryComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/hAccountEmailUpdateSecondaryComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";
import previousValue from "./extra/ePreviousValue";


const AccountEmailUpdateSecondaryPage = () => {
  // Variable
  const retrievePrimaryAPIResponse = accountAPIEndpoint.useAccountRetrievePrimaryAPIQuery(null);
  const [ accountEmailUpdatePrimaryAPITrigger, accountEmailUpdatePrimaryAPIResponse ] = accountAPIEndpoint.useAccountEmailUpdatePrimaryAPIMutation();
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
    updateAPITrigger: accountEmailUpdatePrimaryAPITrigger,
    updateAPIResponse: accountEmailUpdatePrimaryAPIResponse,
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
      {/* AccountEmailUpdateSecondaryPage */}

      <AccountEmailUpdateSecondaryComponent
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue}
        reduxCall={reduxCall}
        apiCall={apiCall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AccountEmailUpdateSecondaryPage;
