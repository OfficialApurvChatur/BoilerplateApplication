import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type BranchSectionListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const BranchSectionListComponent = (props: BranchSectionListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchSectionListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BranchSectionListComponent;
