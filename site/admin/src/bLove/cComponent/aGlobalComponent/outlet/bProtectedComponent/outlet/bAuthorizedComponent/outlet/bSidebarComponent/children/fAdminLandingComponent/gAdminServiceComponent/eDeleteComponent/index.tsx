import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminServiceDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminServiceDeleteComponent = (props: AdminServiceDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminServiceDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminServiceDeleteComponent;
