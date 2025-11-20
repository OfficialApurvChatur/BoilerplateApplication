import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type SignInDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const SignInDeleteComponent = (props: SignInDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignInDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default SignInDeleteComponent;
