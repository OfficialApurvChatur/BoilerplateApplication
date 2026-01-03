import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import aboutCompanyPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/bAboutCompanyPageAPI";

import AboutCompanyPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/bAboutCompanyPageComponent";


const AboutCompanyPagePage = () => { 
  // Variable
  const retrieveAPIResponse = aboutCompanyPageAPIEndpoint.useAboutCompanyPageRetrieveAPIQuery(null);
 
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
      {/* AboutCompanyPagePage */}
      <AboutCompanyPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default AboutCompanyPagePage;
