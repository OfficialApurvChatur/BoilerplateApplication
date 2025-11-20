import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type BranchListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const BranchListComponent = (props: BranchListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BranchListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BranchListComponent;
