import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type RoleDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const RoleDeleteComponent = (props: RoleDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default RoleDeleteComponent;
