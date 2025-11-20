import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminBranchRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminBranchRetrieveComponent = (props: AdminBranchRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchRetrieveComponent;
