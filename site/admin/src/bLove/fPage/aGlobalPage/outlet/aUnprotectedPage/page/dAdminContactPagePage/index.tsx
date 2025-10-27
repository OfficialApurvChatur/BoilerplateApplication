import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminContactPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/dAdminContactPageAPI";

import AdminContactPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/dAdminContactPageComponent";


const AdminContactPagePage = () => {  
  // Variable
  const retrieveAPIResponse = adminContactPageAPIEndpoint.useAdminContactPageRetrieveAPIQuery(null);

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
      {/* AdminContactPagePage */}
      <AdminContactPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminContactPagePage;
