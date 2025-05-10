import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import homePageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/aHomePageAPI";

import HomePageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/aHomePageComponent";


const HomePagePage = () => {  
  // Variable
  const listAPIResponse = homePageAPIEndpoint.useHomePageListAPIQuery(null);

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
      {/* HomePagePage */}
      <HomePageComponent
        ReduxCall={ReduxCall}
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default HomePagePage;
