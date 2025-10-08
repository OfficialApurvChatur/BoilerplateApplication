import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AuthenticatedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent";

import fullRoute from "@/bLove/gRoute/bFullRoute";


const AuthenticatedLayout = () => {
  // Variable
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // All Renders
	// 1. First Render
	useEffect(() => {
    if (!(reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus) return;

		(
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Verified" && 
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (
      navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aAdminHomePageRoute)
    ) :
    (
      (reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus === "Not Verified" && 
      !(reduxCall.state.receivedObject as any)?.AccountRetrieve?._id
    ) ? (

      pathname === fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute ?
        navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute) :
      pathname === fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute ?
        navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute) :
      pathname === fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute ?
        navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute) :
      pathname.startsWith(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.dResetPasswordRoute) ?
        navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute) :
      navigate(fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute)
      
    ) : null
    
	}, [pathname, (reduxCall.state.receivedObject as any)?.AccountRetrieve?.eAccountStatus])
    
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticatedLayout */}

      <AuthenticatedComponent>
        <Outlet />
      </AuthenticatedComponent>

    </React.Fragment>
  )
}

export default AuthenticatedLayout;
