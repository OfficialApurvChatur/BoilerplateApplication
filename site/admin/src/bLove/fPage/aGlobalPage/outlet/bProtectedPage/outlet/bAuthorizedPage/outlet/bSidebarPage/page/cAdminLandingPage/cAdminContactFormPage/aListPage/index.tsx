import React, { useEffect } from "react";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminContactFormAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cAdminLandingAPI/cAdminContactFormAPI";

import AdminContactFormListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cAdminLandingComponent/cAdminContactFormComponent/aListComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import listSchema from "./extra/bSchema";
import columns from "./extra/dColumns";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminContactFormListPage = () => {
  // Variable
	const socket = useSocket();
  const listAPIResponse = adminContactFormAPIEndpoint.useAdminContactFormListAPIQuery(null);

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    listAPIResponse
  }
  
  // Listening Socket Events
  useSocketEventHook(socket, {
    ADMINCONTACTFORM_LISTED: () => APICall.listAPIResponse.refetch()
  })

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.listAPIResponseHandler(APICall.listAPIResponse)
  }, [APICall.listAPIResponse])

  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.adminContactForm, "List") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminContactFormListPage */}
      <AdminContactFormListComponent 
        header={header({ listAPIResponse: APICall.listAPIResponse })} 
        data={z.array(listSchema).parse(APICall.listAPIResponse?.data?.list || [])} 
        columns={columns} 
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default AdminContactFormListPage;
