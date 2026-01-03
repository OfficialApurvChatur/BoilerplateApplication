import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminBranchListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminBranchListComponent = (props: AdminBranchListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchListComponent;
