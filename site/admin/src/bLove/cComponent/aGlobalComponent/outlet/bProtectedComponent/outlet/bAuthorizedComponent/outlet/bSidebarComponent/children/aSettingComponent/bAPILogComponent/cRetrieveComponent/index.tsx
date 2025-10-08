import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type APILogRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const APILogRetrieveComponent = (props: APILogRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* APILogRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default APILogRetrieveComponent;
