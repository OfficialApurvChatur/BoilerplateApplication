import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AccessPointRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AccessPointRetrieveComponent = (props: AccessPointRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccessPointRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AccessPointRetrieveComponent;
