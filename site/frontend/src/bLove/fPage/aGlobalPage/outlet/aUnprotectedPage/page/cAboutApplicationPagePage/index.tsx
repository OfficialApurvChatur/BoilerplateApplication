import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import aboutApplicationPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/cAboutApplicationPageAPI";

import AboutApplicationPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/cAboutApplicationPageComponent";


const AboutApplicationPagePage = () => { 
  // Variable
  const retrieveAPIResponse = aboutApplicationPageAPIEndpoint.useAboutApplicationPageRetrieveAPIQuery(null);
 
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
      {/* AboutApplicationPagePage */}
      <AboutApplicationPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AboutApplicationPagePage;
