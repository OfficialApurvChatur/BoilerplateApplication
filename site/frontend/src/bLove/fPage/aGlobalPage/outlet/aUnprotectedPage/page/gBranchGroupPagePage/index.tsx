import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import BranchGroupPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/gBranchGroupPageComponent";


const BranchGroupPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* BranchGroupPagePage */}
      <BranchGroupPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default BranchGroupPagePage;
