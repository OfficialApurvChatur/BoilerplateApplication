import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminProjectSectionDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminProjectSectionDeleteComponent = (props: AdminProjectSectionDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectSectionDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminProjectSectionDeleteComponent;
