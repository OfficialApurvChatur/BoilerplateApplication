import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type VideoStorageListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const VideoStorageListComponent = (props: VideoStorageListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* VideoStorageListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default VideoStorageListComponent;
