import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type PermissionListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const PermissionListComponent = (props: PermissionListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PermissionListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default PermissionListComponent;
