import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ServiceRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ServiceRetrieveComponent = (props: ServiceRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ServiceRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ServiceRetrieveComponent;
