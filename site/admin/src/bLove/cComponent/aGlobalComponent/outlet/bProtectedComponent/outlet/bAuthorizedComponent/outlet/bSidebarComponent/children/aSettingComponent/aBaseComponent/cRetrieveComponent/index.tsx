import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BaseRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const BaseRetrieveComponent = (props: BaseRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default BaseRetrieveComponent;
