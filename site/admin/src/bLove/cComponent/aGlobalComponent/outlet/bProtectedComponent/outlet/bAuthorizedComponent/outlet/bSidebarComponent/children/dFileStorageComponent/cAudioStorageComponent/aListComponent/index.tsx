import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type AudioStorageListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const AudioStorageListComponent = (props: AudioStorageListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AudioStorageListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default AudioStorageListComponent;
