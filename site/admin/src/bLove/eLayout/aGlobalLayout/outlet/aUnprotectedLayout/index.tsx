import React from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import signOutAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/cSignOutAPI";

import UnprotectedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent";

import apiHandler from "./extra/aAPIHandler";


const UnprotectedLayout = () => {
  // Variable
  const navigate = useNavigate();
  const [ signOutPrimaryAPITrigger, signOutPrimaryAPIResponse ] = signOutAPIEndpoint.useLazySignOutPrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    submitAPITrigger: signOutPrimaryAPITrigger,
    submitAPIResponse: signOutPrimaryAPIResponse,
  } 

  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedLayout */}

      <UnprotectedComponent reduxCall={reduxCall} apiHandler={apiHandler.submitAPIHandler(reduxCall)(APICall.submitAPITrigger)(navigate)} >
        <Outlet />
      </UnprotectedComponent>

    </React.Fragment>
  )
}

export default UnprotectedLayout;
