import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminBranchGroupRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminBranchGroupRetrieveComponent = (props: AdminBranchGroupRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchGroupRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchGroupRetrieveComponent;
