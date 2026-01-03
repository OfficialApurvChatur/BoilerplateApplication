import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type RequestRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const RequestRetrieveComponent = (props: RequestRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RequestRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default RequestRetrieveComponent;
