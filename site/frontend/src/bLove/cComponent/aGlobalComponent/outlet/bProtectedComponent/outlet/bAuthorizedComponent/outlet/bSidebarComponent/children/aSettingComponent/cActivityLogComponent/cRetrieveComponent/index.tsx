import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ActivityLogRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ActivityLogRetrieveComponent = (props: ActivityLogRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ActivityLogRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ActivityLogRetrieveComponent;
