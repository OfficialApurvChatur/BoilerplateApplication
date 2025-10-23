import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminCounterListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminCounterListComponent = (props: AdminCounterListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminCounterListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminCounterListComponent;
