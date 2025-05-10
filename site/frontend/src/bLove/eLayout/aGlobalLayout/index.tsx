import React, { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aUserAccountAPI";

import GlobalComponent from "@/bLove/cComponent/aGlobalComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";


const GlobalLayout = () => {
  // Variable
  const userAccountRetrieveAPIResponse = userAccountAPIEndpoint.useUserAccountRetrieveAPIQuery(null);

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    userAccountRetrieveAPIResponse,
  }
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.userAccountRetrieveAPIResponseHandler(ReduxCall, APICall.userAccountRetrieveAPIResponse)
  }, [APICall.userAccountRetrieveAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* GlobalLayout */}

      {APICall.userAccountRetrieveAPIResponse.isLoading ? (
        <div className='min-h-screen flex justify-center items-center' >Checking Profile...</div>
      ) : (
        <Suspense fallback={<div className='min-h-screen flex justify-center items-center' >Loading Profile...</div>}>
          <GlobalComponent>
            <Outlet />
          </GlobalComponent>
        </Suspense>
      )}

    </React.Fragment>
  )
}

export default GlobalLayout;
