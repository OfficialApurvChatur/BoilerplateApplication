import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type PermissionRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const PermissionRetrieveComponent = (props: PermissionRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* PermissionRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default PermissionRetrieveComponent;
