import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ChatDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ChatDeleteComponent = (props: ChatDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ChatDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ChatDeleteComponent;
