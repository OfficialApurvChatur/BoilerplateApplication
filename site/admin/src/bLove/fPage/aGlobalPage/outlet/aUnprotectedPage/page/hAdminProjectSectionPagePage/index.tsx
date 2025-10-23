import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import AdminProjectSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/hAdminProjectSectionPageComponent";


const AdminProjectSectionPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectSectionPagePage */}
      <AdminProjectSectionPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectSectionPagePage;
