import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AudioStorageRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const AudioStorageRetrieveComponent = (props: AudioStorageRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AudioStorageRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AudioStorageRetrieveComponent;
