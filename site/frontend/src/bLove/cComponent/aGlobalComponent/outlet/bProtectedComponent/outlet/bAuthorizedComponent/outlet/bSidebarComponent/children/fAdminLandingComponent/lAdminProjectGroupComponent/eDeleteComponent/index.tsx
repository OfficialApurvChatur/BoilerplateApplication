import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminProjectGroupDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminProjectGroupDeleteComponent = (props: AdminProjectGroupDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectGroupDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectGroupDeleteComponent;
