import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminContactFormRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminContactFormRetrieveComponent = (props: AdminContactFormRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminContactFormRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminContactFormRetrieveComponent;
