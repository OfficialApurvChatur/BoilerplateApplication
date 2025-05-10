import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminHomePageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/aAdminHomePageAPI";

import AdminHomePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aAdminHomePageComponent";


const AdminHomePagePage = () => {  
  // Variable
  const listAPIResponse = adminHomePageAPIEndpoint.useAdminHomePageListAPIQuery(null);

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse,
  }  

  // JSX
  return (
    <React.Fragment>
      {/* AdminHomePagePage */}
      <AdminHomePageComponent
        ReduxCall={ReduxCall}
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default AdminHomePagePage;
