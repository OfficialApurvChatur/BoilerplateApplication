import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminProjectSectionPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/iAdminProjectSectionPageAPI";

import AdminProjectSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/iAdminProjectSectionPageComponent";


const AdminProjectSectionPagePage = () => {  
  // Variable
  const retrieveAPIResponse = adminProjectSectionPageAPIEndpoint.useAdminProjectSectionPageRetrieveAPIQuery(null);

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
      {/* AdminProjectSectionPagePage */}
      <AdminProjectSectionPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectSectionPagePage;
