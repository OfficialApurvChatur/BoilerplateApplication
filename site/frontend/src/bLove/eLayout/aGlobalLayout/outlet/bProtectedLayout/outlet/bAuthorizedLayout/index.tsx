import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import signOutAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/aAuthenticatedAPI/cSignOutAPI";

import AuthorizedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent";

import fullRoute from "@/bLove/gRoute/bFullRoute";

import apiHandler from "./extra/aAPIHandler";


const AuthorizedLayout = () => {
  // Variable
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [ signOutPrimaryAPITrigger, signOutPrimaryAPIResponse ] = signOutAPIEndpoint.useLazySignOutPrimaryAPIQuery();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    submitAPITrigger: signOutPrimaryAPITrigger,
    submitAPIResponse: signOutPrimaryAPIResponse,
  } 
  
  // All Renders
	// 1. First Render
	useEffect(() => {
    if (!(reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus) return;

		(
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Verified" && 
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (

      (
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute ||
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute ||  
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute ||
        !pathname.startsWith(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute)
      ) ?
        navigate(pathname) :
      navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute)

    ) :
    (
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Not Verified" && 
      !(reduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (
      navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute)
    ) : null

  }, [pathname, (reduxCall.state.receivedObject as any)?.AccountRetrieve])
  
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedLayout */}

      <AuthorizedComponent reduxCall={reduxCall} apiHandler={apiHandler.submitAPIHandler(reduxCall)(apiCall.submitAPITrigger)(navigate)} >
        <Outlet />
      </AuthorizedComponent>

    </React.Fragment>
  )
}

export default AuthorizedLayout;
