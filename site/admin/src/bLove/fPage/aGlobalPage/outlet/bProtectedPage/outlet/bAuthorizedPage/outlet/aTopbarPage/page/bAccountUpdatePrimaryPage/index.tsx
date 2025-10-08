import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import AccountUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/bAccountUpdatePrimaryComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";
import previousValue from "./extra/ePreviousValue";


const AccountUpdatePrimaryPage = () => {
  // Variable
  const retrievePrimaryAPIResponse = accountAPIEndpoint.useAccountRetrievePrimaryAPIQuery(null);
  const [ accountUpdatePrimaryAPITrigger, accountUpdatePrimaryAPIResponse ] = accountAPIEndpoint.useAccountUpdatePrimaryAPIMutation();
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
    updateAPITrigger: accountUpdatePrimaryAPITrigger,
    updateAPIResponse: accountUpdatePrimaryAPIResponse,
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
      {/* AccountUpdatePrimaryPage */}
      <AccountUpdateComponent
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

export default AccountUpdatePrimaryPage;
