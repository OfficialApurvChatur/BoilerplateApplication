import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminBranchSectionDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminBranchSectionDeleteComponent = (props: AdminBranchSectionDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchSectionDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchSectionDeleteComponent;
