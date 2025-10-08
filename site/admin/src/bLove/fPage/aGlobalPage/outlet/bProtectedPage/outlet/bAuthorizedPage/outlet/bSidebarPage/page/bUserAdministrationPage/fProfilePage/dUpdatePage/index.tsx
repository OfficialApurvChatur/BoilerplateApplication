import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/fProfileAPI";
import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/eUserAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import ProfileUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/fProfileComponent/dUpdateComponent";

import formHeader from "./extra/aFormHeader";
import formData from "./extra/bFormData";
import formValueSchema from "./extra/cFormValueSchema";
import formValueDefault from "./extra/dFormValueDefault";
import formValuePrevious from "./extra/eFormValuePrevious";
import apiHandler from "./extra/fAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const ProfileUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = profileAPIEndpoint.useProfileRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = profileAPIEndpoint.useProfileUpdateAPIMutation();
  const userListAPIResponse = userAPIEndpoint.useUserListMiniAPIQuery(null);
  const [ accountRetrievePrimaryAPITrigger, accountRetrievePrimaryAPIResponse ] = accountAPIEndpoint.useLazyAccountRetrievePrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse,
    userListAPIResponse,
    accountRetrievePrimaryAPITrigger,
    accountRetrievePrimaryAPIResponse,
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`PROFILE_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })  

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrieveAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.profile, "Update") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* ProfileUpdatePage */}
      <ProfileUpdateComponent 
        formHeader={formHeader({ id: (id as string), retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        formData={formData({ retrieveAPIResponse: apiCall.retrieveAPIResponse, apiCall: apiCall })} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        formValuePrevious={formValuePrevious(apiCall)}
        apiHandler={apiHandler.updateAPIHandler(apiCall.updateAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)({ id: id })} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default ProfileUpdatePage;
