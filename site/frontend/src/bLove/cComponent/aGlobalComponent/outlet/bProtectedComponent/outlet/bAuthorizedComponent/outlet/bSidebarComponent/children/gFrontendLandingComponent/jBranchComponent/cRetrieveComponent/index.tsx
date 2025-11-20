import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BranchRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const BranchRetrieveComponent = (props: BranchRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BranchRetrieveComponent;
