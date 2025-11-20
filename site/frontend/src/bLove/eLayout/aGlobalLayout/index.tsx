import React, { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import accountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/aTopbarAPI/aAccountAPI";

import GlobalComponent from "@/bLove/cComponent/aGlobalComponent";

import apiHandler from "./extra/aAPIHandler";
import { LoaderFive } from "@/aConnection/bShadcnConnection/components/ui/loader";


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
        <React.Fragment>
          {/* <div className='min-h-screen flex justify-center items-center' >Checkinadg Profile...</div> */}
          <div className="flex justify-center items-center min-h-screen" >
            <LoaderFive text="Profile Verification! Please wait..." />
          </div>
        </React.Fragment>
      ) : (
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-screen" >
            <LoaderFive text="Profile Verification! Please wait..." />
          </div>
        }>
          <GlobalComponent>
            <Outlet />
          </GlobalComponent>
        </Suspense>
      )}

    </React.Fragment>
  )
}

export default GlobalLayout;
