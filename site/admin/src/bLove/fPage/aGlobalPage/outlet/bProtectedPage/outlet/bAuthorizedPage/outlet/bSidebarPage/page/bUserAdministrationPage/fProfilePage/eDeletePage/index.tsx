import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/fProfileAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import ProfileDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/fProfileComponent/eDeleteComponent";

import pageHeader from "./extra/aPageHeader";
import pageData from "./extra/bPageData";
import apiHandler from "./extra/cAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const ProfileDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = profileAPIEndpoint.useProfileRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = profileAPIEndpoint.useProfileDeleteAPIMutation();
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
    deleteAPITrigger,
    deleteAPIResponse,
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
  return (!isAllowedUtility(reduxCall, isAllowedConstant.profile, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* ProfileDeletePage */}
      <ProfileDeleteComponent
        pageHeader={pageHeader()} 
        pageData={pageData({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        apiHandler={apiHandler.deleteAPIHandler(apiCall.deleteAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)({ id: id })} 
        apiCall={apiCall} 
      />
    </React.Fragment>
  )
}

export default ProfileDeletePage;
