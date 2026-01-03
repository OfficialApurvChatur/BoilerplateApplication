import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BranchSectionRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const BranchSectionRetrieveComponent = (props: BranchSectionRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BranchSectionRetrieveComponent;
