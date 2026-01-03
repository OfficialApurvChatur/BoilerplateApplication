import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type RoleRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const RoleRetrieveComponent = (props: RoleRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default RoleRetrieveComponent;
