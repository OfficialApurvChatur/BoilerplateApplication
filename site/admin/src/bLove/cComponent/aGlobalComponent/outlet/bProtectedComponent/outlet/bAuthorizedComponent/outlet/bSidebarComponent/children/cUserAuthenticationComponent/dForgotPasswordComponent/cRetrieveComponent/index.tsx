import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ForgotPasswordRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ForgotPasswordRetrieveComponent = (props: ForgotPasswordRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ForgotPasswordRetrieveComponent;
