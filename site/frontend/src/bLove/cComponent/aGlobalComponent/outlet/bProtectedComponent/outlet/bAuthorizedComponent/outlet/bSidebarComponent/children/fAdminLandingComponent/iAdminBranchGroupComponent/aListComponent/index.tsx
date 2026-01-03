import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminBranchGroupListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminBranchGroupListComponent = (props: AdminBranchGroupListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchGroupListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchGroupListComponent;
