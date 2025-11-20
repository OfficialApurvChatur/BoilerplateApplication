import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type BaseListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const BaseListComponent = (props: BaseListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BaseListComponent;
