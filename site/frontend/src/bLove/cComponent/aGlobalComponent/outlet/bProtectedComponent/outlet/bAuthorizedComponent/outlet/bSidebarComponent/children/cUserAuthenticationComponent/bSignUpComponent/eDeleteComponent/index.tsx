import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type SignUpDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const SignUpDeleteComponent = (props: SignUpDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default SignUpDeleteComponent;
