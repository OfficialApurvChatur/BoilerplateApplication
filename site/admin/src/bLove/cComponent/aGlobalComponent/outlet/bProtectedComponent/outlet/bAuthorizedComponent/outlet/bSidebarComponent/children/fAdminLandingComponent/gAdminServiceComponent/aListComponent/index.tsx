import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminServiceListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminServiceListComponent = (props: AdminServiceListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminServiceListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminServiceListComponent;
