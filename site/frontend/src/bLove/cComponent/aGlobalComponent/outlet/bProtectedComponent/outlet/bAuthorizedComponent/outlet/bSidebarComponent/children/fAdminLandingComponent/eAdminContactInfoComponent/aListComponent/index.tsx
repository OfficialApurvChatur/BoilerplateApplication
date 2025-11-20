import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminContactInfoListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminContactInfoListComponent = (props: AdminContactInfoListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactInfoListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminContactInfoListComponent;
