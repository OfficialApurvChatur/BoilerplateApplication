import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import aboutPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/bAboutPageAPI";

import AboutPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/bAboutPageComponent";


const AboutPagePage = () => {  
  // Variable
  const listAPIResponse = aboutPageAPIEndpoint.useAboutPageListAPIQuery(null);
 
  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // API Call
  const APICall = {
    listAPIResponse,
  }    

  // JSX
  return (
    <React.Fragment>
      {/* AboutPagePage */}
      <AboutPageComponent
        ReduxCall={ReduxCall}
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default AboutPagePage;
