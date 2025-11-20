import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type SignInRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const SignInRetrieveComponent = (props: SignInRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignInRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignInRetrieveComponent;
