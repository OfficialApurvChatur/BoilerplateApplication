import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminProjectSectionRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminProjectSectionRetrieveComponent = (props: AdminProjectSectionRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminProjectSectionRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminProjectSectionRetrieveComponent;
