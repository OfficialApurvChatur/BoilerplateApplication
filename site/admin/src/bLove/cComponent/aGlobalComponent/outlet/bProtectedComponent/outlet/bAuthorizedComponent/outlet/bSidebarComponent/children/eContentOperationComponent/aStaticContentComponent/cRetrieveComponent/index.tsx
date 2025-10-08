import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type StaticContentRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const StaticContentRetrieveComponent = (props: StaticContentRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* StaticContentRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default StaticContentRetrieveComponent;
