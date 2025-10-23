import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminProjectDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminProjectDeleteComponent = (props: AdminProjectDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectDeleteComponent;
