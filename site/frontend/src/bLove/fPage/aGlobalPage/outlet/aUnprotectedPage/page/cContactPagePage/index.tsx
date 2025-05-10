import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import ContactPageComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent/children/cContactPageComponent";


const ContactPagePage = () => {  
  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }

  // JSX
  return (
    <React.Fragment>
      {/* ContactPagePage */}
      <ContactPageComponent
        ReduxCall={ReduxCall}
      />
    </React.Fragment>
  )
}

export default ContactPagePage;
