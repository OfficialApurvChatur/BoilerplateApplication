import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminBranchPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/hAdminBranchPageComponent";


const AdminBranchPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchPagePage */}
      <AdminBranchPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchPagePage;
