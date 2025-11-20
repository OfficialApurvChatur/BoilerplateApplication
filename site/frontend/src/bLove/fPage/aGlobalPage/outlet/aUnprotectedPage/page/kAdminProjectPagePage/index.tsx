import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminProjectPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/kAdminProjectPageComponent";


const AdminProjectPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectPagePage */}
      <AdminProjectPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectPagePage;
