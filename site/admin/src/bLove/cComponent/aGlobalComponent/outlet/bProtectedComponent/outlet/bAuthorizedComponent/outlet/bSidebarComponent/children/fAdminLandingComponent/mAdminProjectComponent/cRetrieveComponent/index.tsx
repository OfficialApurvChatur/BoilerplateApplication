import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminProjectRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminProjectRetrieveComponent = (props: AdminProjectRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminProjectRetrieveComponent;
