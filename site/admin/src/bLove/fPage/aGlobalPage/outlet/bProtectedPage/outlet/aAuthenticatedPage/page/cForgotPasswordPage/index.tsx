import React from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import forgotPasswordAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/dForgotPasswordAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import ForgotPasswordComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent/children/cForgotPasswordComponent";

import formHeader from "./extra/aFormHeader";
import formInput from "./extra/bFormInput";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";


const ForgotPasswordPage = () => {
  // Variable
  const navigate = useNavigate();
  const [ forgotPasswordPrimaryAPITrigger, forgotPasswordPrimaryAPIResponse ] = forgotPasswordAPIEndpoint.useForgotPasswordPrimaryAPIMutation();
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    submitAPITrigger: forgotPasswordPrimaryAPITrigger,
    submitAPIResponse: forgotPasswordPrimaryAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordPage */}
      <ForgotPasswordComponent
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

export default ForgotPasswordPage;
