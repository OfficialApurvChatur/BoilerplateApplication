import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminBranchGroupPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/gAdminBranchGroupPageComponent";


const AdminBranchGroupPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchGroupPagePage */}
      <AdminBranchGroupPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchGroupPagePage;
