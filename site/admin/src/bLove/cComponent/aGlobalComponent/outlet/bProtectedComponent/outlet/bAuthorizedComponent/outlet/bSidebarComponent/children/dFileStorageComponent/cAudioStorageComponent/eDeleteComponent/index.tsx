import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type AudioStorageDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const AudioStorageDeleteComponent = (props: AudioStorageDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AudioStorageDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default AudioStorageDeleteComponent;
