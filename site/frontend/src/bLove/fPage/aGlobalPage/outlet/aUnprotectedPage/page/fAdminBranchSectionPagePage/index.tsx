import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import adminBranchSectionPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/fAdminBranchSectionPageAPI";

import AdminBranchSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/fAdminBranchSectionPageComponent";


const AdminBranchSectionPagePage = () => {  
  // Variable
  const retrieveAPIResponse = adminBranchSectionPageAPIEndpoint.useAdminBranchSectionPageRetrieveAPIQuery(null);

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
      {/* AdminBranchSectionPagePage */}
      <AdminBranchSectionPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchSectionPagePage;
