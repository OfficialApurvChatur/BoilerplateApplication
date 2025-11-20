import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ResetPasswordRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ResetPasswordRetrieveComponent = (props: ResetPasswordRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ResetPasswordRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ResetPasswordRetrieveComponent;
