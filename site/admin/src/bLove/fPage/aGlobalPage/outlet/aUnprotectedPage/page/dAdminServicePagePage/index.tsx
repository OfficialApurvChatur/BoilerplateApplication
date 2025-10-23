import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminServicePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/dAdminServicePageComponent";


const AdminServicePagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminServicePagePage */}
      <AdminServicePageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminServicePagePage;
