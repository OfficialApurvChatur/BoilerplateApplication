import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import branchSectionPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/fBranchSectionPageAPI";

import BranchSectionPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/fBranchSectionPageComponent";


const BranchSectionPagePage = () => {  
  // Variable
  const retrieveAPIResponse = branchSectionPageAPIEndpoint.useBranchSectionPageRetrieveAPIQuery(null);

  // Redux Call
  const reduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const apiCall = {
    retrieveAPIResponse,
  }  

  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionPagePage */}
      <BranchSectionPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default BranchSectionPagePage;
