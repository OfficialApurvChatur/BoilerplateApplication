import React from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import signInAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/aSignInAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import SignInComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent/children/aSignInComponent";

import formHeader from "./extra/aFormHeader";
import formInput from "./extra/bFormInput";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";


const SignInPage = () => {
  // Variable
  const navigate = useNavigate();
  const [ signInPrimaryAPITrigger, signInPrimaryAPIResponse ] = signInAPIEndpoint.useSignInPrimaryAPIMutation();
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    submitAPITrigger: signInPrimaryAPITrigger,
    submitAPIResponse: signInPrimaryAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* SignInPage */}
      <SignInComponent
        formHeader={formHeader()} 
        formInput={formInput()} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.submitAPIHandler(apiCall.submitAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)} 
        apiCall={apiCall} // For Loading Only
      />
    </React.Fragment>
  )
}

export default SignInPage;
