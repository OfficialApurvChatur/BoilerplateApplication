import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminContactPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/cAdminContactPageComponent";


const AdminContactPagePage = () => {  
  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminContactPagePage */}
      <AdminContactPageComponent
        ReduxCall={ReduxCall}
      />
    </React.Fragment>
  )
}

export default AdminContactPagePage;
