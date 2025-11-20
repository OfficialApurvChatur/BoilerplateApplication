import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type PermissionDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const PermissionDeleteComponent = (props: PermissionDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PermissionDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default PermissionDeleteComponent;
