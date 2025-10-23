import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminBranchAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/fAdminLandingAPI/jAdminBranchAPI";

import AdminBranchDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/fAdminLandingComponent/jAdminBranchComponent/eDeleteComponent";

import pageHeader from "./extra/aPageHeader";
import pageData from "./extra/bPageData";
import apiHandler from "./extra/cAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminBranchDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = adminBranchAPIEndpoint.useAdminBranchRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = adminBranchAPIEndpoint.useAdminBranchDeleteAPIMutation();

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
    deleteAPIResponse
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`ADMINBRANCH_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrieveAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.adminBranch, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminBranchDeletePage */}
      <AdminBranchDeleteComponent
        pageHeader={pageHeader()} 
        pageData={pageData({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        apiHandler={apiHandler.deleteAPIHandler(apiCall.deleteAPITrigger)(navigate)({ id: id })} 
        apiCall={apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchDeletePage;
