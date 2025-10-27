import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminProjectGroupPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/jAdminProjectGroupPageComponent";


const AdminProjectGroupPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectGroupPagePage */}
      <AdminProjectGroupPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectGroupPagePage;
