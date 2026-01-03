import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminHeroListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminHeroListComponent = (props: AdminHeroListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminHeroListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminHeroListComponent;
