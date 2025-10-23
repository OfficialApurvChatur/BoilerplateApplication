import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ServiceDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ServiceDeleteComponent = (props: ServiceDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ServiceDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ServiceDeleteComponent;
