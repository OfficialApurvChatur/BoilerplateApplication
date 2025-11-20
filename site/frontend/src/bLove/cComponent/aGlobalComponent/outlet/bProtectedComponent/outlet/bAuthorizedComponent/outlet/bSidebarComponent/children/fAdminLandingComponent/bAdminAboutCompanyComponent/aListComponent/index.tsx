import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AdminAboutCompanyListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AdminAboutCompanyListComponent = (props: AdminAboutCompanyListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyListComponent;
