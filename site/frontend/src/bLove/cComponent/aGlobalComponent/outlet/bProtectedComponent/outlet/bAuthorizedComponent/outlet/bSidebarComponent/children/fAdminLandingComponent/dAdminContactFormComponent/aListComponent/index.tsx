import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminContactFormListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminContactFormListComponent = (props: AdminContactFormListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactFormListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminContactFormListComponent;
