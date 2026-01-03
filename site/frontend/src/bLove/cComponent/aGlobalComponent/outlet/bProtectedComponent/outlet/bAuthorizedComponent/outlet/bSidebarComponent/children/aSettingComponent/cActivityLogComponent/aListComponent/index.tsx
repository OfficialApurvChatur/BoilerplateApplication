import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ActivityLogListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ActivityLogListComponent = (props: ActivityLogListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ActivityLogListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ActivityLogListComponent;
