import React from "react"

import TypicalDeleteComponent from "../../../../component/eTypicalDeleteComponent"


type ImageStorageDeleteComponentType = {
  pageHeader: any,
  pageData: any,
  apiHandler: any
  apiCall: any
}

const ImageStorageDeleteComponent = (props: ImageStorageDeleteComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ImageStorageDeleteComponent */}
      <TypicalDeleteComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiHandler={props.apiHandler}
        apiCall= {props.apiCall}
      />
    </React.Fragment>
  )
}

export default ImageStorageDeleteComponent;
