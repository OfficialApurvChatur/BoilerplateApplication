import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AdminAboutCompanyDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AdminAboutCompanyDeleteComponent = (props: AdminAboutCompanyDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyDeleteComponent;
