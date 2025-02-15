import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminContactFormAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cAdminLandingAPI/cAdminContactFormAPI";

import AdminContactFormRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cAdminLandingComponent/cAdminContactFormComponent/cRetrieveComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import data from "./extra/cData";
import header from "./extra/bHeader";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminContactFormRetrievePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const retrieveAPIResponse = adminContactFormAPIEndpoint.useAdminContactFormRetrieveAPIQuery({ params: { _id: id } });

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    retrieveAPIResponse
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`ADMINCONTACTFORM_RETRIEVED:${id}`]: () => APICall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.adminContactForm, "Retrieve") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminContactFormRetrievePage */}
      <AdminContactFormRetrieveComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
      />
    </React.Fragment>
  )
}

export default AdminContactFormRetrievePage;
