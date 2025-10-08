import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ActivityLogDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ActivityLogDeleteComponent = (props: ActivityLogDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ActivityLogDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ActivityLogDeleteComponent;
