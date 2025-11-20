import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type BranchGroupDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const BranchGroupDeleteComponent = (props: BranchGroupDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchGroupDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default BranchGroupDeleteComponent;
