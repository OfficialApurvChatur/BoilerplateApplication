import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type BaseDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const BaseDeleteComponent = (props: BaseDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default BaseDeleteComponent;
