import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ChatRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ChatRetrieveComponent = (props: ChatRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ChatRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ChatRetrieveComponent;
