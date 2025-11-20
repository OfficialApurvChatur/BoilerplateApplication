import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminAboutApplicationDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminAboutApplicationDeleteComponent = (props: AdminAboutApplicationDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutApplicationDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminAboutApplicationDeleteComponent;
