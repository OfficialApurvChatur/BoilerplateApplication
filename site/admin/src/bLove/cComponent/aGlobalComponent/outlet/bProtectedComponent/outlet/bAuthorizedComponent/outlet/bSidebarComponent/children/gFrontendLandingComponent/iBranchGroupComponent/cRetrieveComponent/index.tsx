import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BranchGroupRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const BranchGroupRetrieveComponent = (props: BranchGroupRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchGroupRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BranchGroupRetrieveComponent;
