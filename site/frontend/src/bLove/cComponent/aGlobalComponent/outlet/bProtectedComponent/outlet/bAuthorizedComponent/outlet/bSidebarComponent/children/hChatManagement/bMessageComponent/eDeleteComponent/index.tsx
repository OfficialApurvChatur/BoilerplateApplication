import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type MessageDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const MessageDeleteComponent = (props: MessageDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MessageDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default MessageDeleteComponent;
