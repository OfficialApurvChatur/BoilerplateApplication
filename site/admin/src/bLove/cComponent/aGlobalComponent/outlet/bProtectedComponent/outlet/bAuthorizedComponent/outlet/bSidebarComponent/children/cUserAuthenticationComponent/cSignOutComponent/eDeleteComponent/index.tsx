import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type SignOutDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const SignOutDeleteComponent = (props: SignOutDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignOutDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default SignOutDeleteComponent;
