import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type BranchSectionDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const BranchSectionDeleteComponent = (props: BranchSectionDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default BranchSectionDeleteComponent;
