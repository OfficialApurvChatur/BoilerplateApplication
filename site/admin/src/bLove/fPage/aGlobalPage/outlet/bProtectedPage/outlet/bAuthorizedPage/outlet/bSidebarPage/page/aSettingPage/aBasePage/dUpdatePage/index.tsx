import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/aBaseAPI";

import BaseUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const BaseUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = baseAPIEndpoint.useBaseRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = baseAPIEndpoint.useBaseUpdateAPIMutation();

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
    updateAPIResponse
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
  return (!isAllowedUtility(reduxCall, isAllowedConstant.base, "Update") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* BaseUpdatePage */}
      <BaseUpdateComponent 
        header={header({ id: (id as string), retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue(apiCall)}
        apiCall={apiCall}
        submitHandler={apiResponseHandler.updateAPIResponseHandler(apiCall.updateAPITrigger)(navigate)({ id: id })} 
      />
    </React.Fragment>
  )
}

export default BaseUpdatePage;
