import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type StaticContentListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const StaticContentListComponent = (props: StaticContentListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* StaticContentListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default StaticContentListComponent;
