import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminContactInfoRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminContactInfoRetrieveComponent = (props: AdminContactInfoRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactInfoRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminContactInfoRetrieveComponent;
