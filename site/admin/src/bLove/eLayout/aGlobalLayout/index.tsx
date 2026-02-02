import React, { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import GlobalComponent from "@/bLove/cComponent/aGlobalComponent";

import apiHandler from "./extra/aAPIHandler";

import LoaderComponent from "@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent";


const GlobalLayout = () => {
  // Variable
  const accountRetrievePrimaryAPIResponse = accountAPIEndpoint.useAccountRetrievePrimaryAPIQuery(null);

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    accountRetrievePrimaryAPIResponse,
  }
  
  // All Render
  // 1. Success Render
  useEffect(() => {
    apiHandler.accountRetrievePrimaryAPIHandler(reduxCall, apiCall.accountRetrievePrimaryAPIResponse)
  }, [apiCall.accountRetrievePrimaryAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* GlobalLayout */}

      {apiCall.accountRetrievePrimaryAPIResponse.isLoading ? (
        <LoaderComponent message="Profile Verification! Please wait..." />
      ) : (
        <Suspense fallback={<LoaderComponent message="Suspense Loading..." />}>
          <GlobalComponent>
            <Outlet />
          </GlobalComponent>
        </Suspense>
      )}

    </React.Fragment>
  )
}

export default GlobalLayout;
