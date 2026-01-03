import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AdminHeroRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AdminHeroRetrieveComponent = (props: AdminHeroRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AdminHeroRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AdminHeroRetrieveComponent;
