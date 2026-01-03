import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type StaticContentDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const StaticContentDeleteComponent = (props: StaticContentDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* StaticContentDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default StaticContentDeleteComponent;
