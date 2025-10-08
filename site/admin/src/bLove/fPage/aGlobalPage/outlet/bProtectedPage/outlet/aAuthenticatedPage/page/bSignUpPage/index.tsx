import React from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import signUpAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/bSignUpAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import SignUpComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent/children/bSignUpComponent";

import formHeader from "./extra/aFormHeader";
import formInput from "./extra/bFormInput";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";


const SignUpPage = () => {
  // Variable
  const navigate = useNavigate();
  const [ signUpPrimaryAPITrigger, signUpPrimaryAPIResponse ] = signUpAPIEndpoint.useSignUpPrimaryAPIMutation();
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    submitAPITrigger: signUpPrimaryAPITrigger,
    submitAPIResponse: signUpPrimaryAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* SignUpPage */}
      <SignUpComponent
        formHeader={formHeader()} 
        formInput={formInput()} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.submitAPIHandler(apiCall.submitAPITrigger)(reduxCall)(navigate)(accountRetrievePrimaryAPITrigger)} 
        apiCall={apiCall} // For Loading Only
      />
    </React.Fragment>
  )
}

export default SignUpPage;
