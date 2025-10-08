import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/bAdminAboutPageAPI";

import AdminAboutPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/bAdminAboutPageComponent";


const AdminAboutPagePage = () => { 
  // Variable
  const listAPIResponse = adminAboutPageAPIEndpoint.useAdminAboutPageListAPIQuery(null);
 
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    listAPIResponse,
  }    

  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutPagePage */}
      <AdminAboutPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminAboutPagePage;
