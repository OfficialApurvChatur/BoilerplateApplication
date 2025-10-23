import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminBranchSectionRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminBranchSectionRetrieveComponent = (props: AdminBranchSectionRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchSectionRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminBranchSectionRetrieveComponent;
