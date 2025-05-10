import React from "react"
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import userAuthAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/aUserAuthAPI";

import UnprotectedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent";

import submitHandler from "./extra/bSubmitHandler";


const UnprotectedLayout = () => {
  // Variable
  const [ signOutAPITrigger, signOutAPIResponse ] = userAuthAPIEndpoint.useLazyUserAuthSignOutAPIQuery();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    submitAPITrigger: signOutAPITrigger,
    submitAPIResponse: signOutAPIResponse,
  } 

  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedLayout */}

      <UnprotectedComponent ReduxCall={ReduxCall} APICall={APICall} submitHandler={submitHandler} >
        <Outlet />
      </UnprotectedComponent>

    </React.Fragment>
  )
}

export default UnprotectedLayout;
