import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminBranchSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/eAdminBranchSectionPageComponent";


const AdminBranchSectionPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchSectionPagePage */}
      <AdminBranchSectionPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchSectionPagePage;
