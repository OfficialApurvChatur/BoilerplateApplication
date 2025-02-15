import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutCompanyAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/cAdminLandingAPI/bAdminAboutCompanyAPI";

import AdminAboutCompanyRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/cAdminLandingComponent/bAdminAboutCompanyComponent/cRetrieveComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import data from "./extra/cData";
import header from "./extra/bHeader";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const AdminAboutCompanyRetrievePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const retrieveAPIResponse = adminAboutCompanyAPIEndpoint.useAdminAboutCompanyRetrieveAPIQuery({ params: { _id: id } });

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
    [`ADMINABOUTCOMPANY_RETRIEVED:${id}`]: () => APICall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.adminAboutCompany, "Retrieve") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* AdminAboutCompanyRetrievePage */}
      <AdminAboutCompanyRetrieveComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyRetrievePage;
