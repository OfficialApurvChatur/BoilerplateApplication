import React from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import resetPasswordAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/eResetPasswordAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import ResetPasswordComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent/children/dResetPasswordComponent";

import formHeader from "./extra/aFormHeader";
import formInput from "./extra/bFormInput";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import apiHandler from "./extra/eAPIHandler";


const ResetPasswordPage = () => {
  // Variable
  const { token } = useParams();
  const navigate = useNavigate();
  const [ resetPasswordPrimaryAPITrigger, resetPasswordPrimaryAPIResponse ] = resetPasswordAPIEndpoint.useResetPasswordPrimaryAPIMutation();
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    submitAPITrigger: resetPasswordPrimaryAPITrigger,
    submitAPIResponse: resetPasswordPrimaryAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordPage */}
      <ResetPasswordComponent
        formHeader={formHeader()} 
        formInput={formInput()} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        apiHandler={apiHandler.submitAPIHandler(apiCall.submitAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)({ token: token })} 
        apiCall={apiCall} // For Loading Only
      />
    </React.Fragment>
  )
}

export default ResetPasswordPage;
