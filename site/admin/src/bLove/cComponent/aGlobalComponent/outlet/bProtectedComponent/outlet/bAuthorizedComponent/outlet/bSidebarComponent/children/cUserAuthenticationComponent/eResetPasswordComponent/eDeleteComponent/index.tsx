import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ResetPasswordDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ResetPasswordDeleteComponent = (props: ResetPasswordDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ResetPasswordDeleteComponent;
