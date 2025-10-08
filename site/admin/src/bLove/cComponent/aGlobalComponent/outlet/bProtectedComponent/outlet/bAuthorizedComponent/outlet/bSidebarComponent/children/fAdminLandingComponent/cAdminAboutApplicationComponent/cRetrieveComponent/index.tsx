import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminAboutApplicationRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminAboutApplicationRetrieveComponent = (props: AdminAboutApplicationRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminAboutApplicationRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminAboutApplicationRetrieveComponent;
