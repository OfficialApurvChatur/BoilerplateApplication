import React, { useEffect } from "react";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import signUpAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cUserAuthenticationAPI/bSignUpAPI";

import SignUpListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cUserAuthenticationComponent/bSignUpComponent/aListComponent";

import listHeader from "./extra/aListHeader";
import listSchema from "./extra/bListSchema";
import listColumn from "./extra/cListColumn";
import apiHandler from "./extra/dAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const SignUpListPage = () => {
  // Variable
	const socket = useSocket();
  const listAPIResponse = signUpAPIEndpoint.useSignUpListAPIQuery(null);

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
    SIGNUP_LISTED: () => apiCall.listAPIResponse.refetch()
  })

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.listAPIHandler(apiCall.listAPIResponse)
  }, [apiCall.listAPIResponse])

  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.signUp, "List") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* SignUpListPage */}
      <SignUpListComponent 
        listHeader={listHeader({ listAPIResponse: apiCall.listAPIResponse })} 
        listColumn={listColumn} 
        listData={z.array(listSchema).parse(apiCall.listAPIResponse?.data?.list || [])} 
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default SignUpListPage;
