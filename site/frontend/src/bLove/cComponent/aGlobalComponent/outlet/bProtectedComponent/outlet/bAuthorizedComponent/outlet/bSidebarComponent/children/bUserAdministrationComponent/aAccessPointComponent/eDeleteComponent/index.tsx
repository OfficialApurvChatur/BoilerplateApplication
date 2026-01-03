import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AccessPointDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AccessPointDeleteComponent = (props: AccessPointDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccessPointDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AccessPointDeleteComponent;
