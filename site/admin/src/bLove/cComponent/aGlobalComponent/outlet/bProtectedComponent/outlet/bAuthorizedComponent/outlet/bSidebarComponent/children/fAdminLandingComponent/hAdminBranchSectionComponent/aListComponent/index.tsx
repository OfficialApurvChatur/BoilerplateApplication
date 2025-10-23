import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminBranchSectionListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminBranchSectionListComponent = (props: AdminBranchSectionListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchSectionListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchSectionListComponent;
