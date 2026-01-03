import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import BranchPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/hBranchPageComponent";


const BranchPagePage = () => {  
  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* BranchPagePage */}
      <BranchPageComponent
        reduxCall={reduxCall}
      />
    </React.Fragment>
  )
}

export default BranchPagePage;
