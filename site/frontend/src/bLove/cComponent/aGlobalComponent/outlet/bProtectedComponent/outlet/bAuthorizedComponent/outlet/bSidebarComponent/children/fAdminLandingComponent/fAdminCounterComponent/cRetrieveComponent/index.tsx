import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminCounterRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminCounterRetrieveComponent = (props: AdminCounterRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminCounterRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminCounterRetrieveComponent;
