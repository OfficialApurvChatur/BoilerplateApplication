import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminProjectSectionListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminProjectSectionListComponent = (props: AdminProjectSectionListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectSectionListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminProjectSectionListComponent;
