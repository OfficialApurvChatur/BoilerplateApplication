import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type SignOutRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const SignOutRetrieveComponent = (props: SignOutRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignOutRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default SignOutRetrieveComponent;
