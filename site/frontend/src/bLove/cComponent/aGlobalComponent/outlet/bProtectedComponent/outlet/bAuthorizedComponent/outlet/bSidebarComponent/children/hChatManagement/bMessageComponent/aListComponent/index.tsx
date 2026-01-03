import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type MessageListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const MessageListComponent = (props: MessageListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* MessageListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default MessageListComponent;
