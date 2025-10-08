import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dRoleAPI";
import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import RoleDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/dRoleComponent/eDeleteComponent";

import pageHeader from "./extra/aPageHeader";
import pageData from "./extra/bPageData";
import apiHandler from "./extra/cAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const RoleDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = roleAPIEndpoint.useRoleRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = roleAPIEndpoint.useRoleDeleteAPIMutation();
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
    [`ROLE_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrieveAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.role, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* RoleDeletePage */}
      <RoleDeleteComponent
        pageHeader={pageHeader()} 
        pageData={pageData({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        apiHandler={apiHandler.deleteAPIHandler(apiCall.deleteAPITrigger)(reduxCall)(navigate)(apiCall.accountRetrievePrimaryAPITrigger)({ id: id })} 
        apiCall={apiCall} 
      />
    </React.Fragment>
  )
}

export default RoleDeletePage;
