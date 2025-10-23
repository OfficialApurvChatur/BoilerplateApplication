import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminServiceRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminServiceRetrieveComponent = (props: AdminServiceRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminServiceRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminServiceRetrieveComponent;
