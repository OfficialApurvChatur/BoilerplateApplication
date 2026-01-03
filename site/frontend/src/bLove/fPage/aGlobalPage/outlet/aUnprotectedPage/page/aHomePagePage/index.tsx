import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import homePageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/aHomePageAPI";

import HomePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aHomePageComponent";


const HomePagePage = () => {  
  // Variable
  const retrieveAPIResponse = homePageAPIEndpoint.useHomePageRetrieveAPIQuery(null);

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
      {/* HomePagePage */}
      <HomePageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default HomePagePage;
