import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type ImageStorageRetrieveComponentType = {
  pageHeader: any,
  pageData: any,
  apiCall: any
}

const ImageStorageRetrieveComponent = (props: ImageStorageRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ImageStorageRetrieveComponent */}
      <TypicalRetrieveComponent 
        pageHeader={props.pageHeader} 
        pageData={props.pageData}
        apiCall={props.apiCall} 
      />
    </React.Fragment>
  )
}

export default ImageStorageRetrieveComponent;
