import React, { useEffect } from "react";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/aBaseAPI";

import BaseListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/aListComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import listSchema from "./extra/bSchema";
import columns from "./extra/dColumns";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const BaseListPage = () => {
  // Variable
	const socket = useSocket();
  const listAPIResponse = baseAPIEndpoint.useBaseListAPIQuery(null);

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const apiCall = {
    listAPIResponse
  }
  
  // Listening Socket Events
  useSocketEventHook(socket, {
    BASE_LISTED: () => apiCall.listAPIResponse.refetch()
  })

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.listAPIResponseHandler(apiCall.listAPIResponse)
  }, [apiCall.listAPIResponse])

  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.base, "List") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* BaseListPage */}
      <BaseListComponent 
        header={header({ listAPIResponse: apiCall.listAPIResponse })} 
        data={z.array(listSchema).parse(apiCall.listAPIResponse?.data?.list || [])} 
        columns={columns} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default BaseListPage;
