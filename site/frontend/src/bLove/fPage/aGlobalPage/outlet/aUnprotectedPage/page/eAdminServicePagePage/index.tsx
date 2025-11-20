import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminServicePageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/eAdminServicePageAPI";

import AdminServicePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/eAdminServicePageComponent";


const AdminServicePagePage = () => {  
  // Variable
  const retrieveAPIResponse = adminServicePageAPIEndpoint.useAdminServicePageRetrieveAPIQuery(null);

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    retrieveAPIResponse,
  }  

  // JSX
  return (
    <React.Fragment>
      {/* AdminServicePagePage */}
      <AdminServicePageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminServicePagePage;
