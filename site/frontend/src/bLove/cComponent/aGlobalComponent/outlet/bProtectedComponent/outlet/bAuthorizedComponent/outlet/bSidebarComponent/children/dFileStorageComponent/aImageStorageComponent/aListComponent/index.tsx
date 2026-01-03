import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type ImageStorageListComponentType = {
  listHeader: any,
  listColumn: any,
  listData: any,
  apiCall: any
}

const ImageStorageListComponent = (props: ImageStorageListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ImageStorageListComponent */}
      <TypicalListComponent 
        listHeader={props.listHeader} 
        listColumn={props.listColumn} 
        listData={props.listData} 
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ImageStorageListComponent;
