import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import branchGroupAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/gFrontendLandingAPI/iBranchGroupAPI";
import branchAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/gFrontendLandingAPI/jBranchAPI";

import BranchGroupUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/gFrontendLandingComponent/iBranchGroupComponent/dUpdateComponent";

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


const BranchGroupUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = branchGroupAPIEndpoint.useBranchGroupRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = branchGroupAPIEndpoint.useBranchGroupUpdateAPIMutation();
  const branchListAPIResponse = branchAPIEndpoint.useBranchListMiniAPIQuery(null);

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
    branchListAPIResponse,
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`BRANCHGROUP_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })  

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrieveAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.branchGroup, "Update") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* BranchGroupUpdatePage */}
      <BranchGroupUpdateComponent 
        formHeader={formHeader({ id: (id as string), retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        formData={formData({ retrieveAPIResponse: apiCall.retrieveAPIResponse, apiCall: apiCall })} 
        formValueSchema={formValueSchema} 
        formValueDefault={formValueDefault}
        formValuePrevious={formValuePrevious(apiCall)}
        apiHandler={apiHandler.updateAPIHandler(apiCall.updateAPITrigger)(navigate)({ id: id })} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default BranchGroupUpdatePage;
