import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminBranchGroupDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminBranchGroupDeleteComponent = (props: AdminBranchGroupDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminBranchGroupDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminBranchGroupDeleteComponent;
