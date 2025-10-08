import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type SignUpRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const SignUpRetrieveComponent = (props: SignUpRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignUpRetrieveComponent;
