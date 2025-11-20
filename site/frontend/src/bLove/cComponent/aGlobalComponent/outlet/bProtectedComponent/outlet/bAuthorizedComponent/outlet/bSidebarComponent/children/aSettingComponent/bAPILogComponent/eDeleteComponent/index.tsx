import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type APILogDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const APILogDeleteComponent = (props: APILogDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* APILogDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default APILogDeleteComponent;
