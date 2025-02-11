import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import userAuthAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAuthAPI";

import AuthorizedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent";

import fullRoute from "@/bLove/gRoute/bFullRoute";

import submitHandler from "./extra/bSubmitHandler";


const AuthorizedLayout = () => {
  // Variable
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
  
  // All Renders
	// 1. First Render
	useEffect(() => {
    if (!(ReduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus) return;

		(
      (ReduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Verified" && 
      (ReduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (

      (
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute ||
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute ||  
        pathname !== fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute ||
        !pathname.startsWith(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute)
      ) ?
        navigate(pathname) :
      navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)

    ) :
    (
      (ReduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Not Verified" && 
      !(ReduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (
      navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute)
    ) : null

  }, [pathname, (ReduxCall.state.receivedObject as any)?.AccountRetrieve])
  
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedLayout */}

      <AuthorizedComponent ReduxCall={ReduxCall} APICall={APICall} submitHandler={submitHandler} >
        <Outlet />
      </AuthorizedComponent>

    </React.Fragment>
  )
}

export default AuthorizedLayout;
