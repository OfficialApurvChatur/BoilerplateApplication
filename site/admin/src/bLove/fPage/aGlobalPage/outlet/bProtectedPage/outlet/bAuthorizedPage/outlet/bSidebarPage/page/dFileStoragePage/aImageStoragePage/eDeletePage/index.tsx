import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import imageStorageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/dFileStorageAPI/aImageStorageAPI";

import ImageStorageDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/dFileStorageComponent/aImageStorageComponent/eDeleteComponent";

import pageHeader from "./extra/aPageHeader";
import pageData from "./extra/bPageData";
import apiHandler from "./extra/cAPIHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const ImageStorageDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const navigate = useNavigate();
  const retrieveAPIResponse = imageStorageAPIEndpoint.useImageStorageRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = imageStorageAPIEndpoint.useImageStorageDeleteAPIMutation();

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
    [`IMAGESTORAGE_RETRIEVED:${id}`]: () => apiCall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.retrieveAPIHandler(apiCall.retrieveAPIResponse)
  }, [apiCall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(reduxCall, isAllowedConstant.imageStorage, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* ImageStorageDeletePage */}
      <ImageStorageDeleteComponent
        pageHeader={pageHeader()} 
        pageData={pageData({ retrieveAPIResponse: apiCall.retrieveAPIResponse })} 
        apiHandler={apiHandler.deleteAPIHandler(apiCall.deleteAPITrigger)(navigate)({ id: id })} 
        apiCall={apiCall} 
      />
    </React.Fragment>
  )
}

export default ImageStorageDeletePage;
