import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/aBaseAPI";

import BaseDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const BaseDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = baseAPIEndpoint.useBaseRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = baseAPIEndpoint.useBaseDeleteAPIMutation();

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
    [`BASE_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.base, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* BaseDeletePage */}
      <BaseDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        apiCall={apiCall} 
        submitHandler={apiResponseHandler.deleteAPIResponseHandler(apiCall.deleteAPITrigger)(navigate)({ id: id })} 
      />
    </React.Fragment>
  )
}

export default BaseDeletePage;
