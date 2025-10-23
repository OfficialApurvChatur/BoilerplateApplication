import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminCounterDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminCounterDeleteComponent = (props: AdminCounterDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminCounterDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminCounterDeleteComponent;
