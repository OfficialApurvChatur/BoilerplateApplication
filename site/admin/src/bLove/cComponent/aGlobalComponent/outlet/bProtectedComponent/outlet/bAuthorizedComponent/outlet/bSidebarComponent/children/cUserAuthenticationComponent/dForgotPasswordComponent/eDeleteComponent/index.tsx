import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ForgotPasswordDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ForgotPasswordDeleteComponent = (props: ForgotPasswordDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ForgotPasswordDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ForgotPasswordDeleteComponent;
