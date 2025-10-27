import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutApplicationPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/cAdminAboutApplicationPageAPI";

import AdminAboutApplicationPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/cAdminAboutApplicationPageComponent";


const AdminAboutApplicationPagePage = () => { 
  // Variable
  const retrieveAPIResponse = adminAboutApplicationPageAPIEndpoint.useAdminAboutApplicationPageRetrieveAPIQuery(null);
 
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
      {/* AdminAboutApplicationPagePage */}
      <AdminAboutApplicationPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminAboutApplicationPagePage;
