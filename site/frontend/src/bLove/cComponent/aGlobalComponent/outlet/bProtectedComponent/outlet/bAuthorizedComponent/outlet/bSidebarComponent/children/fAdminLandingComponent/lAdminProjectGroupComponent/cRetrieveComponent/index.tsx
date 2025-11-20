import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminProjectGroupRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminProjectGroupRetrieveComponent = (props: AdminProjectGroupRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectGroupRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminProjectGroupRetrieveComponent;
