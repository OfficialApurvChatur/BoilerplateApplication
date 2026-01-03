import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type VideoStorageRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const VideoStorageRetrieveComponent = (props: VideoStorageRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* VideoStorageRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default VideoStorageRetrieveComponent;
