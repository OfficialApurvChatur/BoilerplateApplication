import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import contactPageAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/aUnprotectedAPI/dContactPageAPI";

import ContactPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/dContactPageComponent";


const ContactPagePage = () => {  
  // Variable
  const retrieveAPIResponse = contactPageAPIEndpoint.useContactPageRetrieveAPIQuery(null);

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
      {/* ContactPagePage */}
      <ContactPageComponent
        reduxCall={reduxCall}
        apiCall={apiCall}
      />
    </React.Fragment>
  )
}

export default ContactPagePage;
