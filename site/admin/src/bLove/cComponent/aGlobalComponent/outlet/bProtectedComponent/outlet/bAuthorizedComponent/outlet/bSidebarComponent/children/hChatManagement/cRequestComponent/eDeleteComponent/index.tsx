import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type RequestDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const RequestDeleteComponent = (props: RequestDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RequestDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default RequestDeleteComponent;
