import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ChatListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ChatListComponent = (props: ChatListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ChatListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ChatListComponent;
