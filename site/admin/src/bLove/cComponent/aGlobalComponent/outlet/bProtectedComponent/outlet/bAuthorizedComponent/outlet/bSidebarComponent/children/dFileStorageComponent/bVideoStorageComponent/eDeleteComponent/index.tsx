import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type VideoStorageDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const VideoStorageDeleteComponent = (props: VideoStorageDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* VideoStorageDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default VideoStorageDeleteComponent;
