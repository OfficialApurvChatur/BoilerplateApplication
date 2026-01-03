import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AccessPointListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AccessPointListComponent = (props: AccessPointListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccessPointListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AccessPointListComponent;
