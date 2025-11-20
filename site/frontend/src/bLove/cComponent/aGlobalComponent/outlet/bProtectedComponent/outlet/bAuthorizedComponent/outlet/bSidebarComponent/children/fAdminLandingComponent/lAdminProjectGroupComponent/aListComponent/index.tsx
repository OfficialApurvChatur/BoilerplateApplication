import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminProjectGroupListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminProjectGroupListComponent = (props: AdminProjectGroupListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectGroupListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminProjectGroupListComponent;
