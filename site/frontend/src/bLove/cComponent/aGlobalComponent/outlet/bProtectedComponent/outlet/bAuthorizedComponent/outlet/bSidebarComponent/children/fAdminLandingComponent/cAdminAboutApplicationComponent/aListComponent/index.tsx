import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminAboutApplicationListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminAboutApplicationListComponent = (props: AdminAboutApplicationListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutApplicationListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutApplicationListComponent;
