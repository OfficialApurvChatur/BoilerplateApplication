import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type RoleListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const RoleListComponent = (props: RoleListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default RoleListComponent;
