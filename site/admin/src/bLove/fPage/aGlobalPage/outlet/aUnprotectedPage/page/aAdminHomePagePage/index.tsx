import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminHomePageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/aAdminHomePageAPI";

import AdminHomePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aAdminHomePageComponent";


const AdminHomePagePage = () => {  
  // Variable
  const retrieveAPIResponse = adminHomePageAPIEndpoint.useAdminHomePageRetrieveAPIQuery(null);

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
      {/* AdminHomePagePage */}
      <AdminHomePageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminHomePagePage;
