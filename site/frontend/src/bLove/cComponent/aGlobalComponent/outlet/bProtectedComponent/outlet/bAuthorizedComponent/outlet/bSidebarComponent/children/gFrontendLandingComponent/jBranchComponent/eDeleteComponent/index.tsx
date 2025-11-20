import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type BranchDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const BranchDeleteComponent = (props: BranchDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default BranchDeleteComponent;
