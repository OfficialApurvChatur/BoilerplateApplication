import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminAboutCompanyPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/bAdminAboutCompanyPageAPI";

import AdminAboutCompanyPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/bAdminAboutCompanyPageComponent";


const AdminAboutCompanyPagePage = () => { 
  // Variable
  const retrieveAPIResponse = adminAboutCompanyPageAPIEndpoint.useAdminAboutCompanyPageRetrieveAPIQuery(null);
 
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
      {/* AdminAboutCompanyPagePage */}
      <AdminAboutCompanyPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyPagePage;
