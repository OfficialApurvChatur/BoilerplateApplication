import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type APILogListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const APILogListComponent = (props: APILogListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* APILogListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default APILogListComponent;
