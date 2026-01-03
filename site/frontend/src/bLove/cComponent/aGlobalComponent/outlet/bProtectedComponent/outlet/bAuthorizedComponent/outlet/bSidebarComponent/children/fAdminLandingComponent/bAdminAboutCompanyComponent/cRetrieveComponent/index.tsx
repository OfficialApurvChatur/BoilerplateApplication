import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminAboutCompanyRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminAboutCompanyRetrieveComponent = (props: AdminAboutCompanyRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutCompanyRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutCompanyRetrieveComponent;
