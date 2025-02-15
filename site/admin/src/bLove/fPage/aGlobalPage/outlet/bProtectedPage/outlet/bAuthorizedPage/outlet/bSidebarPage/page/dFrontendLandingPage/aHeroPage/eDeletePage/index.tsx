import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import heroAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/dFrontendLandingAPI/aHeroAPI";

import HeroDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/dFrontendLandingComponent/aHeroComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";

import { useSocketEventHook } from "@/bLove/iHook/aSocketEventHook";
import { useSocket } from "@/aConnection/fSocketConnection";

import isAllowedUtility, { isAllowedConstant } from "@/bLove/dUtility/bIsAllowdUtility";
import UnauthorizedAccessComponent from "@/bLove/cComponent/aGlobalComponent/component/dUnauthorizedAccessComponent";


const HeroDeletePage = () => {
  // Variable
  const { id } = useParams();
  const socket = useSocket();
  const retrieveAPIResponse = heroAPIEndpoint.useHeroRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = heroAPIEndpoint.useHeroDeleteAPIMutation();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    retrieveAPIResponse,
    deleteAPITrigger,
    deleteAPIResponse
  }

  // Listening Socket Events
  useSocketEventHook(socket, {
    [`HERO_RETRIEVED:${id}`]: () => APICall.retrieveAPIResponse.refetch()
  })
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (!isAllowedUtility(ReduxCall, isAllowedConstant.hero, "Delete") ? <UnauthorizedAccessComponent /> :
    <React.Fragment>
      {/* HeroDeletePage */}
      <HeroDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default HeroDeletePage;
