import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type MessageRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const MessageRetrieveComponent = (props: MessageRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MessageRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default MessageRetrieveComponent;
